import useData from '@/hooks/useData';
import { fetchNui } from '@/utils/fetchNui';
import { getProfileSrc } from '@/utils/misc';
import { useTranslation } from 'react-i18next';
import { BiTransferAlt } from 'react-icons/bi';

export const TeamMembers = () => {
  const { t } = useTranslation();
  const { currentLobby } = useData();

  const handleChangeTeam = async (teamIdx: number) => {
    await fetchNui('nui:changeTeamInLobby', teamIdx, true);
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-1.5'>
        <div
          className='w-2 h-2 min-w-2 min-h-2'
          style={{
            background: '#FF6153',
            boxShadow: '0px 0px 10.5px 0px #FF6153',
          }}
        />
        <h1 className=' text-xl uppercase'>{t('red_team')}</h1>
      </div>

      {currentLobby.members?.length > 0 && (
        <div className='grid grid-cols-5 gap-3'>
          {[
            ...currentLobby.members.filter((value) => value.team === 1),
            ...Array(15), // بدل 5 خلتها 15 علشان يكمل عدد الأماكن
          ]
            .slice(0, 15) // نحدد 15 مكان بالظبط
            ?.map((member, index) => (
              <div
                key={index}
                className='rounded p-3 flex flex-col items-center justify-center'
                style={{
                  height: 150, // قللت الارتفاع شوية علشان تناسب 15 لاعب
                  border: '0.5px solid rgba(255, 97, 83, .5)',
                  background:
                    'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 97, 83, 0.10) 0%, rgba(255, 97, 83, 0.10) 100%)',
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
                        background:
                          'radial-gradient(111.88% 52.36% at 50% 50%, rgba(255, 97, 83, 0.20) 0%, rgba(153, 58, 50, 0.20) 100%)',
                      }}
                    >
                      <h1 className='text-xs text-[#FF6153]'>{member?.name}</h1>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleChangeTeam(1)}
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
