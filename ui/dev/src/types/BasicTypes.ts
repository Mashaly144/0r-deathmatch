export type iPage = "profile" | "lobbies" | "create-lobby" | "in-game";

export interface iProfile {
  source: number;
  name: string;
  photo?: string;
  played_matches: number;
  kd_rate: number;
  kills: number;
  wins: number;
  deaths: number;
  loses: number;
}

export interface iPlayer {
  source: number;
  name: string;
  kd_rate: number;
  photo?: string;
}

export interface iLobbyPlayer extends iPlayer {
  /**
   * @param 1 = red & 0 = blue
   */
  team: 1 | 0; // 1 -> red & 0 -> blue
}

export interface iLoby {
  id: number;
  members: iLobbyPlayer[];
  leader: iPlayer;
  map: {
    image: string;
    name: string;
  };
  name: string;
  game_time: 5 | 10 | 15;
  mode: 2 | 3 | 4 | 5;
  weapon: string;
  started?: boolean;
  finish_time?: number;
  score?: {
    [1]: number;
    [0]: number;
  };
}
