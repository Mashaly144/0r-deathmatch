import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import useData from "@/hooks/useData";
import { iLoby } from "@/types/BasicTypes";
import { fetchNui } from "@/utils/fetchNui";
import { isEnvBrowser } from "@/utils/misc";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Lobbies = () => {
  const { t } = useTranslation();
  const { setPage } = useData();

  const [isReady, setIsReady] = useState<boolean>(false);

  const [lobbies, setLobbies] = useState<iLoby[]>([]);

  useEffect(() => {
    const fetchLobbies = () => {
      fetchNui("nui:getActiveLobbies", true, [
        {
          game_time: 5,
          id: 1,
          leader: {
            name: "Ali Koç",
            source: 1,
            kd_rate: 1.0,
          },
          map: { name: "de_default", image: "example" },
          members: [{ name: "Ali Koç", source: 1, team: 1, kd_rate: 1.0 }],
          mode: 2,
          name: "Lobby #1",
          started: true,
        } as iLoby,
        {
          game_time: 5,
          id: 1,
          leader: {
            name: "Ali Koç",
            source: 1,
            kd_rate: 1.0,
          },
          map: { name: "de_default", image: "example" },
          members: [{ name: "Ali Koç", source: 1, team: 1, kd_rate: 1.0 }],
          mode: 2,
          name: "Lobby #1",
          started: false,
        } as iLoby,
      ]).then((result) => {
        setLobbies(result);
        setIsReady(true);
      });
    };

    fetchLobbies();
    const interval = setInterval(() => {
      fetchLobbies();
    }, 5000);

    return () => {
      clearInterval(interval);
      setLobbies([]);
    };
  }, []);

  const handleJoinLobby = async (lobbyId: number) => {
    setIsReady(false);
    const result = await fetchNui("nui:joinLobby", lobbyId, true);
    if (!result) {
      const l = await fetchNui("nui:getActiveLobbies", true, [] as iLoby[]);
      setLobbies(l);
    } else if (!isEnvBrowser()) {
      setPage("create-lobby");
    }
    setIsReady(true);
  };

  return (
    <div className="relative w-full h-full px-16 py-32 flex flex-col gap-6">
      <Header goHome={true} />
      <div className="pb-20 w-full h-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 3xl:w-[45%] flex flex-col gap-3">
        <h1 className="text-xl  uppercase">{t("lobbies")}</h1>
        {isReady ? (
          <div className="relative overflow-x-auto scrollbar-hide">
            <table className="w-full h-full text-sm text-left rtl:text-right">
              <thead className="text-white/55">
                <tr>
                  <th scope="col" className="px-6 py-2 bg-black/25 rounded-tl">
                    {t("leader")}
                  </th>
                  <th scope="col" className="px-6 py-2 bg-black/25">
                    {t("map")}
                  </th>
                  <th scope="col" className="px-6 py-2 bg-black/25">
                    {t("time")}
                  </th>
                  <th scope="col" className="px-6 py-2 bg-black/25 text-center">
                    {t("player")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 bg-black/25 rounded-tr text-right"
                  >
                    {t("management")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.values(lobbies)
                  .sort(
                    (a, b) =>
                      ((a.started as number | undefined) ?? Infinity) -
                      ((b.started as number | undefined) ?? Infinity)
                  )
                  .map((lobby, i) => (
                    <tr
                      key={i}
                      className="odd:bg-lobby-1 even:bg-lobby-2 "
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-white"
                      >
                        {lobby?.leader?.name}
                      </th>
                      <td className="px-6 py-4">{lobby?.map?.name}</td>
                      <td className="px-6 py-4">
                        {lobby.game_time} {t("minutes")}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {lobby.members.length}
                        {"/"}
                        {lobby.mode * 2}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() =>
                            !lobby.started && handleJoinLobby(lobby.id)
                          }
                          className={classNames("border rounded", {
                            "cursor-not-allowed": lobby.started,
                          })}
                          style={{
                            border: lobby.started
                              ? "1px solid rgba(255, 97, 83, 0.25)"
                              : "1px solid rgba(255, 241, 83, 0.25)",
                            background: lobby.started
                              ? "radial-gradient(50% 50% at 50% 50%, rgba(255, 97, 83, 0.25) 0%, rgba(176, 55, 57, 0.25) 100%)"
                              : "radial-gradient(50% 50% at 50% 50%, rgba(255, 241, 83, 0.25) 0%, rgba(153, 144, 50, 0.25) 100%)",
                            boxShadow: lobby.started
                              ? "0px 0px 12.8px 0px rgba(255, 97, 83, 0.25) inset"
                              : "0px 0px 12.8px 0px rgba(255, 241, 83, 0.25) inset",
                          }}
                        >
                          <h1 className="text-sm  py-2 px-8">
                            {lobby.started ? t("started") : t("join")}
                          </h1>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {lobbies.length == 0 && (
              <h1 className="my-8 text-center w-full text-3xl ">
                {t("no_lobby")}
              </h1>
            )}
          </div>
        ) : (
          <div className="mt-8 mx-auto">
            <Loading />
          </div>
        )}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center -z-30"
        style={{ backgroundImage: "url(images/index_bg.png)" }}
      >
        <img
          width={1024}
          className="absolute right-0 bottom-0 -z-10"
          src="images/right_banner.png"
          alt="r-banner"
        />
        <div
          className="absolute -z-20 top-0 right-0"
          style={{
            height: "100%",
            width: "520px",
            background:
              "linear-gradient(180deg, rgba(102, 7, 7, 1) 0%, #000 100%)",
          }}
        ></div>
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
