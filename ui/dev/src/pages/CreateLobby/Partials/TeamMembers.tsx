import useData from '@/hooks/useData';
import { fetchNui } from '@/utils/fetchNui';
import { getProfileSrc } from '@/utils/misc';

import { BiTransferAlt } from 'react-icons/bi';

interface TeamMembersProps {
  teamIdx: number; // رقم الفريق (0 أزرق / 1 أحمر / إلخ)
  title: string; // اسم الفريق
  color: string; // اللون الأساسي (hex)
}

export const TeamMembers = ({ teamIdx, title, color }: TeamMembersProps) => {
  const { currentLobby } = useData();

  const handleChangeTeam = async (teamIdx: number) => {
    await fetchNui('nui:changeTeamInLobby', teamIdx, true);
  };

  return (
    <div className='flex flex-col gap-3'>
      {/* عنوان الفريق */}
      <div className='flex items-center gap-1.5'>
        <div
          className='w-2 h-2 min-w-2 min-h-2'
          style={{
            background: color,
            boxShadow: `0px 0px 10.5px 0px ${color}`,
          }}
        />
        <h1 className='text-xl uppercase'>{title}</h1>
      </div>

      {/* اللاعبين */}
      {currentLobby.members?.length > 0 && (
        <div className='grid grid-cols-3 gap-3'>
          {[
            ...currentLobby.members.filter((value) => value.team === teamIdx),
            ...Array(15), // يكمل لحد 15 مكان
          ]
            .slice(0, 15)
            ?.map((member, index) => (
              <div
                key={index}
                className='rounded p-3 flex flex-col items-center justify-center'
                style={{
                  height: 140,
                  border: `0.5px solid ${color}80`, // اللون بشفافية
                  background: `radial-gradient(69.19% 36.84% at 50% 80.26%, ${color}20 0%, ${color}20 100%)`,
                }}
              >
                {member?.name ? (
                  <>
                    <div className='relative w-16 h-16 rounded overflow-hidden'>
                      <img
                        src={getProfileSrc(member?.photo)}
                        alt='profile'
                        className='absolute inset-0 z-[1]'
                      />
                      <div className='relative w-16 h-16 blur-lg z-0'>
                        <img src={getProfileSrc(member?.photo)} alt='profile' />
                      </div>
                    </div>
                    <div
                      className='mt-2 w-full rounded-t p-1 text-center'
                      style={{
                        background: `${color}30`,
                      }}
                    >
                      <h1 className='text-xs' style={{ color }}>
                        {member?.name}
                      </h1>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleChangeTeam(teamIdx)}
                    className='w-full h-full flex items-center justify-center group'
                  >
                    <BiTransferAlt className='w-12 h-12 opacity-10 group-hover:opacity-50 transition' />
                  </button>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
