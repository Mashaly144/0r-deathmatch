import { Header } from "@/components/Header";
import useData from "@/hooks/useData";
import { useTranslation } from "react-i18next";
import { LobbySettings } from "./Partials/LobbySettings";
import { TeamMembers } from "./Partials/TeamMembers";
import { TeamSelect } from "./Partials/TeamSelect";
import { fetchNui } from "@/utils/fetchNui";
import { useState } from "react";
import Alert from "@/components/Alert";

export const CreateLobby: React.FC = () => {
  const { t } = useTranslation();

  const { currentLobby, leaveLobby, userProfile } = useData();
  const [teamSelected, setTeamSelected] = useState<boolean>(
    currentLobby?.leader?.source != userProfile.source
  );
  const [alertMessage, setAlertMessage] = useState<string | undefined>(
    undefined
  );

  const handleStartGame = async () => {
    const result = await fetchNui("nui:startOwnLobby", true, {
      state: false,
      message: "You can not start it alone !",
    });
    if (!result.state && result.message) {
      setAlertMessage(result.message);
      setTimeout(() => setAlertMessage(undefined), 4000);
    }
  };

  const handleLeaveLobby = leaveLobby;

  return (
    <div className="relative w-full h-full">
      {alertMessage && <Alert message={alertMessage} />}
      {teamSelected ? (
        <div className="relative w-full h-full px-16 py-32 flex flex-col gap-6 overflow-auto">
          <Header />
          <div className="mt-4 flex max-xl:flex-col justify-between gap-40 xl:gap-20 max-xl:gap-10">
            <div className="w-full flex flex-col gap-3 2xl:w-1/2 max-xl:w-3/4 max-xl:mx-auto">
              <div className="grid grid-cols-7 items-center gap-5">
                <div
                  className="relative flex items-center gap-3 rounded p-4 col-span-3"
                  style={{
                    height: 66,
                    background:
                      "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                  }}
                >
                  <div
                    className="rounded w-12 h-12 min-w-12 min-h-12 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                    }}
                  >
                    <img
                      src="images/icons/lobby_leader.svg"
                      alt="lobby_leader"
                    />
                  </div>
                  <div className="overflow-hidden whitespace-nowrap">
                    <h1 className=" text-xs text-white/55">
                      {t("lobby_leader")}
                    </h1>
                    <h1 className=" text-lg overflow-hidden text-ellipsis">
                      {currentLobby?.leader?.name}
                    </h1>
                  </div>
                </div>
                <button
                  onClick={handleStartGame}
                  className="relative flex items-center justify-center rounded p-4 col-span-2 border border-white/15 transition hover:border-white/25"
                  style={{
                    height: 66,
                    background:
                      "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                  }}
                >
                  <h1 className="">{t("start_game")}</h1>
                </button>
                <button
                  onClick={handleLeaveLobby}
                  className="relative flex items-center justify-center rounded p-4 col-span-2 border border-white/15 transition hover:border-white/25"
                  style={{
                    height: 66,
                    background:
                      "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                  }}
                >
                  <h1 className="">{t("leave_lobby")}</h1>
                </button>
              </div>
              <div className="mt-2">
                <TeamMembers />
              </div>
            </div>
            <hr className="opacity-25 hidden max-xl:block" />
            <div className="max-xl:w-1/2 max-xl:mx-auto max-w-[40%]">
              <LobbySettings />
            </div>
          </div>
        </div>
      ) : (
        <TeamSelect state={setTeamSelected} />
      )}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 bg-[#121212]"
        style={{ backgroundImage: "url(images/index_bg.png)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-16 bg-contain bg-left"
          style={{ zIndex: -21, backgroundImage: "url(images/top_banner.png)" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-contain bg-left"
          style={{ zIndex: -21, backgroundImage: "url(images/top_banner.png)" }}
        ></div>
      </div>
    </div>
  );
};
