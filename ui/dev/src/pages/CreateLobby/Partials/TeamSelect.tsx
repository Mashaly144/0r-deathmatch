import { fetchNui } from "@/utils/fetchNui";
import { useTranslation } from "react-i18next";

export const TeamSelect = ({
  state,
}: {
  state: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();

  const handleChangeTeam = async (team: "blue" | "red") => {
    const teamIdx = team == "red" ? 1 : 0;
    await fetchNui("nui:changeTeamInLobby", teamIdx, true);
    state(true);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#121212]">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={() => handleChangeTeam("blue")}
          className="flex flex-col items-center justify-center z-10"
        >
          <img width={720} src="images/team_blue.png" alt="team_blue" />
          <div className="w-min">
            <h1
              className="uppercase  whitespace-nowrap"
              style={{ fontSize: 64 }}
            >
              {t("blue_team")}
            </h1>
            <h1 className="text-center  text-sm text-white/55">
              {t("desc_blue_team")}
            </h1>
          </div>
        </button>
        <>
          <div
            className="absolute inset-0 -mr-[132px] bg-cover z-0"
            style={{ backgroundImage: "url(images/team_blue_bg.png)" }}
          ></div>
        </>
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={() => handleChangeTeam("red")}
          className="flex flex-col items-center justify-center z-10"
        >
          <img width={720} src="images/team_red.png" alt="team_red" />
          <div className="w-min">
            <h1
              className="uppercase  whitespace-nowrap"
              style={{ fontSize: 64 }}
            >
              {t("red_team")}
            </h1>
            <h1 className="text-center  text-sm text-white/55">
              {t("desc_red_team")}
            </h1>
          </div>
        </button>
        <>
          <div
            className="absolute inset-0 -ml-[132px] bg-cover z-0"
            style={{ backgroundImage: "url(images/team_red_bg.png)" }}
          ></div>
        </>
      </div>
    </div>
  );
};
