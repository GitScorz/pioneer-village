import { PVGame, PVPrompt, PVZone, PedManager, type PedReactionConfig } from '@lib/client';

const manager = PedManager.getInstance();

export const IsMale = (): boolean => {
  return IsPedMale(PVGame.playerPed());
};

export const IsFemale = (): boolean => {
  return !IsPedMale(PVGame.playerPed());
};

export const IsEvening = (): boolean => {
  const hour = GetClockHours();
  return hour >= 18 || hour < 6;
};

export const IsMorning = (): boolean => {
  const hour = GetClockHours();
  return hour >= 6 && hour < 12;
};

(async () => {
  const ped = await manager.spawn('val-postal-clerk', {
    model: 'U_M_M_VALGENSTOREOWNER_01',
    position: { x: -324.227, y: 804.169, z: 116.882, w: -99.751 },
    freeze: true,
    invincible: true,
    blockEvents: true,
    missionEntity: true,
    // Ambient speech fires on a random interval independently of the routine.
    speech: {
      ref: '0478_U_M_M_ValGenStoreOwner_01',
      names: [
        'HAVE_A_LOOK',
        'SALES_PITCH_BROWSING_GENERAL_GOODS',
        'CHAT_SHOPKEEPER_LOCATION',
        'CHAT_SHOPKEEPER_GOSSIP',
        'PUSH_SALE',
      ],
      params: 'speech_params_standard',
      intervalMs: [30_000, 60_000],
    },
    zone: {
      ref: '0478_U_M_M_ValGenStoreOwner_01',
      params: 'speech_params_standard',
      zoneName: 'val_general_store',
      greetingNames: [
        'GREET_SHOUTED',
        'GREET_GENERAL_FAMILIAR',
        'GREET_GENERAL_STRANGER',
        [IsEvening, 'GREET_EVENING'],
        [IsMorning, 'GREET_MORNING'],
        [() => IsFemale() && IsEvening(), 'GREET_EVENING_FEMALE'],
        [() => IsMale() && IsEvening(), 'GREET_EVENING_MALE'],
        [() => IsFemale() && IsMorning(), 'GREET_MORNING_FEMALE'],
        [() => IsMale() && IsMorning(), 'GREET_MORNING_MALE'],
        [IsFemale, 'GREET_FEMALE'],
        [IsFemale, 'WELCOME_FEMALE'],
        [IsMale, 'GREET_MALE'],
        [IsMale, 'WELCOME_MALE'],
      ],
      farewellNames: ['FAREWELL', 'FAREWELL_BIG_SALE', 'FAREWELL_NO_SALE', 'FAREWELL_SALE', 'GOODBYE_START'],
    },
    // Routine loops through all step types as a demonstration:
    //   scenario — teller works at the counter
    //   anim     — does key unlock animation
    //   speech   — one-shot voiced line mid-routine
    //   wait     — brief pause before the next cycle
    routine: [
      { type: 'scenario', name: 'WORLD_HUMAN_SHOPKEEPER', duration: 10_000 },
      // { type: 'anim', dict: 'script_common@jail_cell@unlock@key', anim: 'action_mp_female', duration: 2_000 },
      // {
      //   type: 'speech',
      //   ref: '0478_U_M_M_ValGenStoreOwner_01',
      //   name: 'UNAUTHORIZED_AREA',
      //   params: 'speech_params_force',
      // },
      // { type: 'wait', ms: 2_000 },
    ],
    reactions: [
      // Teller reacts when they personally are attacked.
      {
        event: 'EVENT_ENTITY_DAMAGED',
        entityField: 'attacked',
        cooldownMs: 8_000,
        lines: [
          { ref: '0478_U_M_M_ValGenStoreOwner_01', name: 'GENERIC_CURSE_HIGH', params: 'speech_params_force' },
          { ref: '0478_U_M_M_ValGenStoreOwner_01', name: 'LAW_THREAT', params: 'speech_params_force' },
        ],
        onReact: (pedHandle, data) => {
          // e.g. trigger a flee animation, send a server event, update UI, etc.
          console.log(`ped ${pedHandle} was hit:`, data);
        },
      },
      // Teller reacts to any violence happening nearby (any entity damaged).
      {
        event: 'EVENT_SHOT_FIRED_BULLET_IMPACT',
        cooldownMs: 15_000,
        lines: [
          { ref: '0478_U_M_M_ValGenStoreOwner_01', name: 'GET_AWAY_FROM_ME', params: 'speech_params_force_shouted' },
          {
            ref: '0478_U_M_M_ValGenStoreOwner_01',
            name: 'GENERIC_SHOCKED_MED',
            params: 'speech_params_force_shouted',
          },
        ],
        onReact: (pedHandle, data) => {
          // e.g. trigger a flee animation, send a server event, update UI, etc.
          console.log(`ped ${pedHandle} was hit:`, data);
        },
      },
    ] satisfies PedReactionConfig[],
  });

  console.log('general store ped', ped);
})();

PVZone.AddPoly(
  'val_general_store',
  [
    { x: -319.11, y: 797.54 },
    { x: -326.66, y: 796.4 },
    { x: -328.66, y: 805.96 },
    { x: -320.82, y: 807.28 },
  ],
  116.8,
  120.3,
  {},
);
