import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DataContextProps } from "@/types/DataProviderTypes";
import "./debug.g";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { fetchNui } from "@/utils/fetchNui";
import { iLoby, iPage, iProfile } from "@/types/BasicTypes";

export const DataCtx = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [page, setPage] = useState<iPage>("profile");
  const [userProfile, setUserProfile] = useState<iProfile>({} as iProfile);
  const [currentLobby, setCurrentLobby] = useState<iLoby>({} as iLoby);
  const [playableWeapons, setPlayableWeapons] = useState<string[]>([]);

  useEffect(() => {
    fetchNui("nui:loadUI", true, true);
  }, []);

  useNuiEvent("ui:setupUI", (data) => {
    if (data.setLocale) {
      i18n.addResourceBundle("en", "translation", data.setLocale);
    }
    if (data.setPlayableWeapons) {
      setPlayableWeapons(data.setPlayableWeapons);
    }
    fetchNui("nui:onLoadUI", true, true);
  });

  useNuiEvent("ui:setPage", setPage);
  useNuiEvent("ui:setUserProfile", setUserProfile);
  useNuiEvent("ui:setCurrentLobby", setCurrentLobby);

  useNuiEvent("ui:leaveCurrentLobby", () => {
    setPage("profile");
    setCurrentLobby({} as iLoby);
    setUserProfile((p) => ({
      ...p,
      lobby: undefined,
    }));
  });

  const leaveLobby = async () => {
    if (!currentLobby.id) {
      return false;
    }
    await fetchNui("nui:leaveCurrentLobby", currentLobby.id, true);
    setCurrentLobby({} as iLoby);
    setUserProfile((p) => ({
      ...p,
      lobby: undefined,
    }));
    setPage("profile");
    return true;
  };

  const createNewLobby = async () => {
    if (currentLobby.id) {
      await fetchNui("nui:leaveCurrentLobby", currentLobby.id, true);
      setCurrentLobby({} as iLoby);
      return false;
    }
    const result = await fetchNui("nui:createLobby", true, {
      state: true,
      lobby: {
        id: 1,
        leader: {
          source: 1,
          name: "Ali Koç",
          photo: undefined,
        },
        game_time: 10,
        map: {
          image: "example.png",
          name: "de_classic",
        },
        members: [
          {
            source: 1,
            name: "Ali Koç",
            photo: undefined,
            team: 1,
            kd_rate: 1.23,
          },
        ],
        mode: 5,
        name: "Lobby #1",
      } as iLoby,
    });
    if (!result.state) return false;
    setCurrentLobby(result.lobby);
    setPage("create-lobby");
    return true;
  };

  const value = {
    page,
    setPage,
    userProfile,
    currentLobby,
    createNewLobby,
    setCurrentLobby,
    leaveLobby,
    playableWeapons,
  };

  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
