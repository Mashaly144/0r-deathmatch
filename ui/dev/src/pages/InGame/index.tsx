import useData from "@/hooks/useData";
import { getProfileSrc } from "@/utils/misc";
import classNames from "classnames";
import { useEffect, useState } from "react";

export const InGame = () => {
  const { currentLobby } = useData();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!currentLobby.finish_time) return;

      const now = new Date().getTime();
      const distance = currentLobby.finish_time * 1000 - now;

      setTimeLeft(distance >= 0 ? Math.floor(distance / 1000) : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLobby.finish_time]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    currentLobby.started &&
    currentLobby?.members &&
    currentLobby.score && (
      <div className="fixed flex left-1/2 -translate-x-1/2 space-x-1">
        <div className="flex">
          {Array.from({
            length:
              currentLobby.mode -
              currentLobby.members.filter((v) => v.team == 1).length,
          }).map((_, i) => (
            <div
              key={i}
              className={classNames("w-14 h-14 border-2 invisible")}
            />
          ))}
          {currentLobby?.members
            ?.filter((v) => v.team === 1)
            .map((member, i) => (
              <div key={i} className={"w-14 h-14"}>
                <img
                  className={classNames(
                    "border-2 border-[#FF6153] w-full h-full",
                    { "border-l-0": i != 0 }
                  )}
                  src={getProfileSrc(member.photo)}
                  alt="profile_photo"
                />
              </div>
            ))}
        </div>
        <div className="flex flex-col justify-between">
          <div
            className="px-4 w-24 border-2 border-white/15 flex items-center justify-center"
            style={{
              background:
                "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
            }}
          >
            <h1 className=" whitespace-nowrap">
              {String(minutes).padStart(2, "0")}
              {" : "}
              {String(seconds).padStart(2, "0")}
            </h1>
          </div>
          <div className="flex h-full">
            <div
              className="w-full border-2 border-t-0 border-r-0 border-white/15 flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
              }}
            >
              <h1 className="">{currentLobby?.score[1]}</h1>
            </div>
            <div
              className="w-full border-2 border-t-0 border-white/15 flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)",
              }}
            >
              <h1 className="">{currentLobby?.score[0]}</h1>
            </div>
          </div>
        </div>
        <div className="flex">
          {currentLobby?.members
            ?.filter((v) => v.team === 0)
            .map((member, i) => (
              <div key={i} className={"w-14 h-14"}>
                <img
                  className={classNames(
                    "border-2 border-[#53A3FF] w-full h-full",
                    { "border-l-0": i != 0 }
                  )}
                  src={getProfileSrc(member.photo)}
                  alt="profile_photo"
                />
              </div>
            ))}
          {Array.from({
            length:
              currentLobby.mode -
              currentLobby.members.filter((v) => v.team == 0).length,
          }).map((_, i) => (
            <div key={i} className="w-14 h-14 border-2 invisible" />
          ))}
        </div>
      </div>
    )
  );
};
