import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import useData from '@/hooks/useData';
import { iLoby } from '@/types/BasicTypes';
import { fetchNui } from '@/utils/fetchNui';
import { isEnvBrowser } from '@/utils/misc';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Lobbies = () => {
  const { t } = useTranslation();
  const { setPage } = useData();

  const [isReady, setIsReady] = useState<boolean>(false);

  const [lobbies, setLobbies] = useState<iLoby[]>([]);

  useEffect(() => {
    const fetchLobbies = () => {
      fetchNui('nui:getActiveLobbies', true, [
        {
          game_time: 5,
          id: 1,
          leader: {
            name: 'Ali Koç',
            source: 1,
            kd_rate: 1.0,
          },
          map: { name: 'de_default', image: 'example' },
          members: [{ name: 'Ali Koç', source: 1, team: 1, kd_rate: 1.0 }],
          mode: 2,
          name: 'Lobby #1',
          started: true,
        } as iLoby,
        {
          game_time: 5,
          id: 1,
          leader: {
            name: 'Ali Koç',
            source: 1,
            kd_rate: 1.0,
          },
          map: { name: 'de_default', image: 'example' },
          members: [{ name: 'Ali Koç', source: 1, team: 1, kd_rate: 1.0 }],
          mode: 2,
          name: 'Lobby #1',
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
    const result = await fetchNui('nui:joinLobby', lobbyId, true);
    if (!result) {
      const l = await fetchNui('nui:getActiveLobbies', true, [] as iLoby[]);
      setLobbies(l);
    } else if (!isEnvBrowser()) {
      setPage('create-lobby');
    }
    setIsReady(true);
  };

  return (
    <div className='relative w-full h-full px-16 py-32 flex flex-col justify-center items-center gap-6 mainbackground'>
      <div className='pb-20 w-full h-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 3xl:w-[50%] flex flex-col gap-3'>
        <div className='w-full flex justify-between items-center gap-6 mb-5'>
          <h1 className='text-2xl'>الغرفة</h1>
          <Header goHome={true} />
        </div>
        {isReady ? (
          <div className='relative overflow-x-auto scrollbar-hide contentBackground'>
            <table className='w-full h-full text-sm border-2 border-border'>
              <thead className='text-white border-b-2 border-border bg-[#ffffff0d]'>
                <tr>
                  <th scope='col' className='px-6 py-2 '>
                    القائد
                  </th>
                  <th scope='col' className='px-6 py-2 '>
                    الخريطة
                  </th>
                  <th scope='col' className='px-6 py-2 '>
                    الوقت
                  </th>
                  <th scope='col' className='px-6 py-2'>
                    اللاعب
                  </th>
                  <th scope='col' className='px-6 py-2 '>
                    الإدارة
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
                      className='odd:border-b-2 border-border text-center'
                    >
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium whitespace-nowrap text-white'
                      >
                        {lobby?.leader?.name}
                      </th>
                      <td className='px-6 py-4'>{lobby?.map?.name}</td>
                      <td className='px-6 py-4'>
                        {lobby.game_time} {t('minutes')}
                      </td>
                      <td className='px-6 py-4 '>
                        {lobby.members.length}
                        {'/'}
                        {lobby.mode * 2}
                      </td>
                      <td className='px-6 py-4 '>
                        <button
                          onClick={() =>
                            !lobby.started && handleJoinLobby(lobby.id)
                          }
                          className='border-border rounded bg-primary hover:shadow-violetGlow font-semibold py-2 px-6 min-w-[100px] hover:brightness-125 disabled:cursor-not-allowed disabled:brightness-75'
                        >
                          {lobby.started ? 'بدأت' : 'انضمام'}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {lobbies.length == 0 && (
              <h1 className='my-8 text-center w-full text-3xl'>
                {t('no_lobby')}
              </h1>
            )}
          </div>
        ) : (
          <div className='mt-8 mx-auto'>
            <Loading />
          </div>
        )}
      </div>
      {/* <div
        className='absolute inset-0 bg-cover bg-center -z-30'
        style={{ backgroundImage: 'url(images/mainBG.png)' }}
      ></div> */}
    </div>
  );
};

// export const Lobbies = () => {
//   const rooms = [
//     {
//       id: 1,
//       leader: 'Ali Koç',
//       map: 'de_default',
//       time: '5 دقائق',
//       players: '1/4',
//     },
//     {
//       id: 2,
//       leader: 'Ali Koç',
//       map: 'de_default',
//       time: '5 دقائق',
//       players: '1/4',
//     },
//     {
//       id: 1,
//       leader: 'Ali Koç',
//       map: 'de_default',
//       time: '5 دقائق',
//       players: '1/4',
//     },
//     {
//       id: 2,
//       leader: 'Ali Koç',
//       map: 'de_default',
//       time: '5 دقائق',
//       players: '1/4',
//     },
//   ];

//   return (
//     <div
//       className='min-h-screen bg-gradient-to-b from-[#14052e]/90 to-[#16181d]/95 p-10'
//       dir='rtl'
//     >
//       {/* العنوان */}
//       <div className='flex items-center justify-between mb-8'>
//         <h1 className='text-3xl font-bold text-white'>قائمة الغرف</h1>
//         <button className='px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg shadow-lg'>
//           إنشاء غرفة جديدة +
//         </button>
//       </div>

//       {/* الغرف */}
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {rooms.map((room) => (
//           <div
//             key={room.id}
//             className='rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition'
//           >
//             <div className='flex items-center justify-between mb-3'>
//               <span className='text-white font-semibold'>{room.leader}</span>
//               <span className='text-xs text-white/60'>القائد</span>
//             </div>
//             <p className='text-sm text-white/80'>🗺️ الخريطة: {room.map}</p>
//             <p className='text-sm text-white/80'>⏱️ الوقت: {room.time}</p>
//             <p className='text-sm text-white/80'>👥 اللاعبين: {room.players}</p>

//             <div className='flex gap-3 mt-4'>
//               <button className='flex-1 bg-violet-600 hover:bg-violet-500 text-white rounded-lg py-2'>
//                 انضمام
//               </button>
//               <button className='flex-1 bg-white/10 hover:bg-white/20 text-white rounded-lg py-2'>
//                 مشاهدة
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
