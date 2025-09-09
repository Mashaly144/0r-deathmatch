import { iLoby, iPage, iProfile } from "./BasicTypes";

export type DataContextProps = {
  playableWeapons: string[];
  page: iPage;
  setPage: React.Dispatch<React.SetStateAction<iPage>>;
  userProfile: iProfile;
  currentLobby: iLoby;
  setCurrentLobby: React.Dispatch<React.SetStateAction<iLoby>>;
  createNewLobby: () => Promise<boolean>;
  leaveLobby: () => Promise<boolean>;
};
