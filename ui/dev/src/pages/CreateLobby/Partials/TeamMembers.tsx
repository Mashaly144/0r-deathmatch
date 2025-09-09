import useData from "@/hooks/useData";
import { fetchNui } from "@/utils/fetchNui";
import { getProfileSrc } from "@/utils/misc";
import { useTranslation } from "react-i18next";
import { BiTransferAlt } from "react-icons/bi";

export const TeamMembers = () => {
  const { t } = useTranslation();
  const { currentLobby } = useData();

  const handleChangeTeam = async (teamIdx: number) => {
    await fetchNui("nui:changeTeamInLobby", teamIdx, true);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 min-w-2 min-h-2"
            style={{
              background: "#FF6153",
              boxShadow: "0px 0px 10.5px 0px #FF6153",
            }}
          />
          <h1 className=" text-xl uppercase">{t("red_team")}</h1>
        </div>
        {currentLobby.members?.length > 0 && (
          <div className="grid grid-cols-5 gap-3">
            {[
              ...currentLobby.members.filter((value) => value.team === 1),
              ...Array(5),
            ]
              .slice(0, currentLobby.mode)
              ?.map((member, index) => (
                <div
                  key={index}
                  className="rounded p-3 flex flex-col items-center justify-center"
                  style={{
                    height: 180,
                    border: "0.5px solid rgba(255, 97, 83, .5)",
                    background:
                      "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 97, 83, 0.10) 0%, rgba(255, 97, 83, 0.10) 100%)",
                  }}
                >
                  {member?.name ? (
                    <>
                      <div className="relative min-w-20 w-20 min-h-20 h-20 rounded">
                        <img
                          src={getProfileSrc(member?.photo)}
                          alt="profile"
                          className="absolute inset-0 z-[1]"
                        />
                        <div className="relative min-w-20 min-h-20 blur-lg z-0">
                          <img
                            src={getProfileSrc(member?.photo)}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div
                        className="mt-3 w-full rounded-t p-1 text-center"
                        style={{
                          background:
                            "radial-gradient(111.88% 52.36% at 50% 50%, rgba(255, 97, 83, 0.20) 0%, rgba(153, 58, 50, 0.20) 100%)",
                        }}
                      >
                        <h1 className=" text-sm text-[#FF6153]">
                          {member?.name}
                        </h1>
                      </div>
                      <div className="w-full rounded-b flex ">
                        <div className="flex items-center justify-center bg-white/10 rounded-bl text-center py-0.5 px-2">
                          <h1 className=" text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                            {t("id")} {member.source}
                          </h1>
                        </div>
                        <div
                          className="w-full flex items-center justify-center bg-white/10 rounded-br text-center py-0.5 px-2 overflow-hidden text-ellipsis"
                          style={{
                            background:
                              "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                          }}
                        >
                          <h1 className=" text-sm whitespace-nowrap overflow-hidden">
                            {t("kd")} {member?.kd_rate?.toFixed(2)}
                          </h1>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleChangeTeam(1)}
                      className="w-full h-full flex items-center justify-center group"
                    >
                      <BiTransferAlt className="w-20 h-20 m-auto opacity-10 group-hover:opacity-50 transition" />
                    </button>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-between gap-6 my-4">
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(-90deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 100%)",
          }}
        ></div>
        <div className="relative w-24 h-24 min-w-24 min-h-24 border rounded-full border-white/5 flex items-center justify-center">
          <div className="absolute w-20 h-20 min-w-20 min-h-20 border rounded-full border-white/5"></div>
          <img
            className="w-full h-full scale-150"
            src="images/vs.png"
            alt="vs"
          />
        </div>
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 100%)",
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 min-w-2 min-h-2"
            style={{
              background: "#53A3FF",
              boxShadow: "0px 0px 10.5px 0px #53A3FF",
            }}
          />
          <h1 className=" text-xl uppercase">
            {t("blue_team")}
          </h1>
        </div>
        {currentLobby.members?.length > 0 && (
          <div className="grid grid-cols-5 gap-3">
            {[
              ...currentLobby.members.filter((value) => value.team === 0),
              ...Array(5),
            ]
              .slice(0, currentLobby.mode)
              ?.map((member, index) => (
                <div
                  key={index}
                  className="rounded p-3 flex flex-col items-center justify-center"
                  style={{
                    height: 180,
                    border: "0.5px solid rgba(83, 163, 255, .5)",
                    background:
                      "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(83, 163, 255, 0.10) 0%, rgba(83, 163, 255, 0.10) 100%)",
                  }}
                >
                  {member?.name ? (
                    <>
                      <div className="relative min-w-20 w-20 min-h-20 h-20 rounded">
                        <img
                          src={getProfileSrc(member?.photo)}
                          alt="profile"
                          className="absolute inset-0 z-[1]"
                        />
                        <div className="relative min-w-20 min-h-20 blur-lg z-0">
                          <img
                            src={getProfileSrc(member?.photo)}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div
                        className="mt-3 w-full rounded-t p-1 text-center"
                        style={{
                          background:
                            "radial-gradient(111.88% 52.36% at 50% 50%, rgba(83, 163, 255, 0.20) 0%, rgba(48, 101, 163, 0.20) 100%)",
                        }}
                      >
                        <h1 className=" text-sm text-[#53A3FF]">
                          {member?.name}
                        </h1>
                      </div>
                      <div className="w-full rounded-b flex ">
                        <div className="flex items-center justify-center bg-white/10 rounded-bl text-center py-0.5 px-2">
                          <h1 className=" text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                            {t("id")} {member.source}
                          </h1>
                        </div>
                        <div
                          className="w-full flex items-center justify-center bg-white/10 rounded-br text-center py-0.5 px-2 overflow-hidden text-ellipsis"
                          style={{
                            background:
                              "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
                          }}
                        >
                          <h1 className=" text-sm whitespace-nowrap overflow-hidden">
                            {t("kd")} {member?.kd_rate?.toFixed(2)}
                          </h1>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleChangeTeam(0)}
                      className="w-full h-full flex items-center justify-center group"
                    >
                      <BiTransferAlt className="w-20 h-20 m-auto opacity-10 group-hover:opacity-50 transition" />
                    </button>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
