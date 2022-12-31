export enum FishingStatus {
  NONE = 0,
  IDLE_OUT_WATER = 1,
  AIMING = 2,
  CAST_READY = 3,
  CASTING = 4,
  UNK_5 = 5,
  IDLE_IN_WATER = 6,
  FISH_HOOKED = 7,
  UNK_8 = 8,
  REMOVING_BOBBER = 9,
  MISSED_BITE = 10,
  LINE_SNAP = 11,
  HOLDING_FISH = 12,
  CHANGING_BAIT = 13,
}

export enum ARL {
  ARL_COMMON = 0,
  ARL_RARE = 1,
  ARL_LEGENDARY = 2,
  ARL_NUMRARITYLEVELS = 3,
}

export enum AIFish {
  ASSIGN = 0,
  CREATE = 1,
  GRAB_AMBIENT = 2,
  SETUP = 3,
  WANDERING = 4,
  NIBBLING = 5,
  STRUGGLING = 6,
  TIRED = 7,
  FLEEING = 8,
  CAUGHT = 9,
  DELETE = 10,
}

export enum FishingLocalBit {
  DONE_DATA_INIT = 1,
  DONE_MP_INIT = 2,
  DONE_FISH_INIT = 4,
  RESERVED_AMBIENT_PEDS = 8,
  PLAYER_RESET_CAST = 16,
  MUSIC_STARTED = 32,
}

export enum FishingMode {
  BOBBER = 0,
  LURE = 1,
}

export enum FishingDataUnsavedBit {
  FORCE_LAUNCH = 1,
  BAIT_UI_CLEAR = 2,
  BAIT_UI_DISPLAY = 4,
  SETUP_FISHING_DATABIND = 8,
  COMPETITIVE_MODE = 16,
  ALLOW_EQUIP_ROD_ANYWHERE = 32,
  PREVENT_SCRIPT_SPAWNED_FISH = 64,
}

export enum FishingParticipantUnsavedBit {
  HAS_JUST_HOOKED_FISH = 1,
  BOBBER_HIT_WATER_DURING_CAST = 2,
  FISH_DIED_DURING_UNHOOK = 4,
  FORCE_REEL_IN = 8,
  FORCE_LOSE_HOOKED_FISH = 16,
  FORCE_KEEP_HOOKED_FISH = 32,
  CAUGHT_NEW_FISH = 64,
}

export enum FishingPlayerContext {
  GRIP_REEL = 0,
  RESET_CAST = 1,
  HOOK_FISH = 2,
  REEL_IN = 3,
  CONTROL = 4,
  RELEASE_FISH = 5,
  KEEP_FISH = 6,
  CHOOSE_BAIT = 7,
  EQUIP_BAIT = 8,
  NUM = 9,
}

export enum FishingCodeSig {
  FLICK_BAIT = 1,
  AUTOREELING_FISH = 2,
  KEEP_DECISION_TIMEOUT = 4,
  UNHOOK_DECISION_LOOP_ENDED = 8,
  BOBBER_WATER_SPLASH = 16,
  CAN_MAKE_UNHOOK_DECISION = 32,
  PROCESS_KEPT_FISH = 64,
  PROCESS_RELEASED_FISH = 128,
  PROCESS_KEPT_FISH_CARRY = 256,
  RELEASED_FISH_IN_WATER = 512,
  FISH_DIED_IN_UNHOOK = 1024,
  IN_CUSTOM_ANIM_SCENE = 2048,
  IS_BOAT_FISHING = 4096,
  CAN_WARP_FOR_KEEP = 8192,
}

export enum FishingRequest {
  NONE = 0,
  MISSED_BITE = 1,
  LINE_SNAPPED = 2,
  FISH_HOOKED = 4,
  FISH_UNHOOKED = 8,
  LINE_RELEASED = 16,
  KEEP_FISH = 32,
  DISCARD_FISH = 64,
  FAST_REEL_IN = 128,
  SCRIPT_IN_CONTROL = 256,
  FISH_NIBBLING = 512,
  BEGIN_CAST = 1024,
  WIND_IN = 2048,
  WIND_OUT = 4096,
  FLICK = 8192,
  FISH_STRUGGLING = 16384,
  AIMING_BREAKOUT = 32768,
  FORCE_BOAT_FISHING = 65536,
  DISABLE_TASK_LOOK_IK = 131072,
}

export enum FishingFishDirection {
  NONE = 0,
  AWAY = 1,
  CENTER = 2,
  LEFT = 3,
  RIGHT = 4,
  GO_INTO_AREA = 5,
  STATIONARY = 6,
  ON_LAND = 7,
  ABOVE_WATER = 8,
}

export enum FishingMainState {
  LOAD_ASSETS = 0,
  WAIT_FOR_ROD_EQUIPPED = 1,
  USING_ROD = 2,
  WAIT_FOR_ROD_UNEQUIPPED = 3,
  TERMINATE = 4,
}

export enum FishSizeIndex {
  SMALL = 0,
  MEDIUM = 1,
  UNK_2 = 2,
  UNK_3 = 3,
  LARGE = 4,
}

export enum SpeciesFish {
  BLUEGILL = 0,
  BULLHEADCATFISH = 1,
  CHAINPICKEREL = 2,
  CHANNELCATFISH = 3,
  LAKESTURGEON = 4,
  LARGEMOUTHBASS = 5,
  LONGNOSEGAR = 6,
  MUSKIE = 7,
  NORTHERNPIKE = 8,
  PERCH = 9,
  REDFINPICKEREL = 10,
  ROCKBASS = 11,
  SMALLMOUTHBASS = 12,
  SALMONSOCKEYE = 13,
  STEELHEADTROUT = 14,
}

export enum WaterType {
  INVALID = -1,
  LAKE = 0,
  RIVER = 1,
  SWAMP = 2,
}

export enum FishingHints {
  'FISHING_HELP_ENUM_EQ_ROD1' = 0,
  'FISHING_HELP_ENUM_EQ_ROD2' = 1,
  'FISHING_HELP_ENUM_EQ_ROD3' = 2,
  'FISHING_HELP_ENUM_EQ_BAIT1' = 3,
  'FISHING_HELP_ENUM_EQ_BAIT2_ABI1' = 4,
  'FISHING_HELP_ENUM_EQ_BAIT2_FUD1' = 5,
  'FISHING_HELP_ENUM_EQ_BAIT2_WAR1' = 6,
  'FISHING_HELP_ENUM_EQ_BAIT2_FSH1' = 7,
  'FISHING_HELP_ENUM_EQ_BAIT3_ABI1' = 8,
  'FISHING_HELP_ENUM_EQ_BAIT3_FUD1' = 9,
  'FISHING_HELP_ENUM_EQ_BAIT3_WAR1' = 10,
  'FISHING_HELP_ENUM_EQ_BAIT3_FSH1' = 11,
  'FISHING_HELP_ENUM_EQ_REBAIT' = 12,
  'FISHING_HELP_ENUM_EQ_BAIT_ANY1' = 13,
  'FISHING_HELP_ENUM_EQ_BAIT_ANY2' = 14,
  'FISHING_HELP_ENUM_CAST_DEEP' = 15,
  'FISHING_HELP_ENUM_CAST_HIGH' = 16,
  'FISHING_HELP_ENUM_CAST_WATER' = 17,
  'FISHING_HELP_ENUM_CAST_CLOSE' = 18,
  'FISHING_HELP_ENUM_CAST_LOS' = 19,
  'FISHING_HELP_ENUM_CAST_BAIT' = 20,
  'FISHING_HELP_ENUM_CAST_NOT_HERE' = 21,
  'FISHING_HELP_ENUM_BEGIN_AIM_HLP' = 22,
  'FISHING_HELP_ENUM_BEGIN_AIM_TOG_HLP' = 23,
  'FISHING_HELP_ENUM_BEGIN_AIM_OBJ' = 24,
  'FISHING_HELP_ENUM_CAST_AIMING_HLP' = 25,
  'FISHING_HELP_ENUM_CAST_AIMING_OBJ' = 26,
  'FISHING_HELP_ENUM_CAST_RELEASE_HLP' = 27,
  'FISHING_HELP_ENUM_CAST_RELEASE_OBJ' = 28,
  'FISHING_HELP_ENUM_CAST_POWER' = 29,
  'FISHING_HELP_ENUM_NIBBLE_DESC' = 30,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_HLP' = 31,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_AUTO_HLP' = 32,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_TOG_HLP' = 33,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_TOG_AUTO_HLP' = 34,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_GRIP' = 35,
  'FISHING_HELP_ENUM_WAIT_BITE_LURE_HOOK' = 36,
  'FISHING_HELP_ENUM_HOOK_FISH_HLP' = 37,
  'FISHING_HELP_ENUM_HOOK_FISH_OBJ' = 38,
  'FISHING_HELP_ENUM_FLICK_BAIT' = 39,
  'FISHING_HELP_ENUM_SPOOL_EMPTY' = 40,
  'FISHING_HELP_ENUM_MISSED_BITE1' = 41,
  'FISHING_HELP_ENUM_MISSED_BITE2' = 42,
  'FISHING_HELP_ENUM_HOOKED_MOVE_ROD1_HLP' = 43,
  'FISHING_HELP_ENUM_HOOKED_MOVE_ROD1_OBJ' = 44,
  'FISHING_HELP_ENUM_HOOKED_MOVE_ROD2_HLP' = 45,
  'FISHING_HELP_ENUM_HOOKED_REEL_IN_HLP' = 46,
  'FISHING_HELP_ENUM_HOOKED_REEL_IN_AUTO_HLP' = 47,
  'FISHING_HELP_ENUM_HOOKED_REEL_IN_OBJ' = 48,
  'FISHING_HELP_ENUM_OBJECT_REEL_IN' = 49,
  'FISHING_HELP_ENUM_FISH_ESC1' = 50,
  'FISHING_HELP_ENUM_FISH_ESC2' = 51,
  'FISHING_HELP_ENUM_FISH_ESC3' = 52,
  'FISHING_HELP_ENUM_FISH_ESC4' = 53,
  'FISHING_HELP_ENUM_BAIT_LOST' = 54,
  'FISHING_HELP_ENUM_STOW_HORSE' = 55,
  'FISHING_HELP_ENUM_HOLD_REEL' = 56,
  'FISHING_HELP_ENUM_PUMP_ROD' = 57,
  'FISHING_HELP_ENUM_FULL_SATCHEL' = 58,
  'FISHING_HELP_ENUM_EQUIP_CHEESE' = 59,
  'FISHING_HELP_ENUM_EQUIP_BREAD' = 60,
  'FISHING_HELP_ENUM_EQUIP_CORN' = 61,
  'FISHING_HELP_ENUM_EQUIP_WORM' = 62,
  'FISHING_HELP_ENUM_EQUIP_CRICKET' = 63,
  'FISHING_HELP_ENUM_EQUIP_CRAYFISH' = 64,
  'FISHING_HELP_ENUM_EQUIP_LURE_LAKE' = 65,
  'FISHING_HELP_ENUM_EQUIP_LURE_RIVER' = 66,
  'FISHING_HELP_ENUM_EQUIP_LURE_SWAMP' = 67,
  'FISHING_HELP_ENUM_EQUIP_SPECIAL_LURE_LAKE' = 68,
  'FISHING_HELP_ENUM_EQUIP_SPECIAL_LURE_RIVER' = 69,
  'FISHING_HELP_ENUM_EQUIP_SPECIAL_LURE_SWAMP' = 70,
  'FISHING_HELP_ENUM_EQUIP_SPECIAL_SPINNER' = 71,
  'FISHING_HELP_ENUM_HOOKED_REEL_IN_HLP2' = 72,
  'FISHING_HELP_ENUM_NUM' = 73,
}

export const FishingErrorHints: Record<number, number> = {
  [-1]: 25,
  1: 15,
  2: 17,
  3: 16,
  4: 18,
  5: 19,
  6: 20,
  7: 21,
};