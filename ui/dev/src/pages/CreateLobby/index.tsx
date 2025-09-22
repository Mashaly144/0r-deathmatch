import useData from '@/hooks/useData';
import { useTranslation } from 'react-i18next';
import { LobbySettings } from './Partials/LobbySettings';
import { TeamMembers } from './Partials/TeamMembers';
import { TeamSelect } from './Partials/TeamSelect';
import { fetchNui } from '@/utils/fetchNui';
import { useState } from 'react';
import Alert from '@/components/Alert';

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
    const result = await fetchNui('nui:startOwnLobby', true, {
      state: false,
      message: 'You can not start it alone !',
    });
    if (!result.state && result.message) {
      setAlertMessage(result.message);
      setTimeout(() => setAlertMessage(undefined), 4000);
    }
  };

  const handleLeaveLobby = leaveLobby;

  return (
    <div className='relative w-full h-full px-10 py-16 flex flex-col gap-8 overflow-hidden'>
      {/* Lobby Info */}
      <div className='flex items-center justify-between gap-4'>
        {/* Leader Info */}
        <div className='flex items-center gap-3 rounded p-4 flex-1 max-w-xs border border-white/15 bg-white/5'>
          <div className='w-12 h-12 flex items-center justify-center rounded bg-white/10'>
            <img src='images/icons/lobby_leader.svg' alt='leader' />
          </div>
          <div className='overflow-hidden'>
            <h1 className='text-xs text-white/50'>{t('lobby_leader')}</h1>
            <h2 className='text-lg font-bold truncate'>
              {currentLobby?.leader?.name}
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={handleStartGame}
            className='px-6 py-3 rounded border border-violet-400 bg-violet-600/20 hover:bg-violet-600/40 transition'
          >
            بدء اللوبي
          </button>
          <button
            onClick={handleLeaveLobby}
            className='px-6 py-3 rounded border border-red-400 bg-red-600/20 hover:bg-red-600/40 transition'
          >
            مغادرة اللوبي
          </button>
        </div>
      </div>

      {/* Teams + Settings */}
      <div className='flex flex-1 gap-6'>
        {/* Red Team */}
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500 shadow-red-500 shadow' />
            <h1 className='text-xl font-bold'>{t('red_team')}</h1>
          </div>
          <div className='grid grid-cols-5 gap-3'>
            {/* هنا يترندر TeamMembers الأحمر (15) */}
            {/* مثال: */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className='h-28 rounded border border-red-400/50 bg-red-500/5 flex items-center justify-center'
              >
                Slot {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className='w-1/3 flex flex-col gap-4 px-4'>
          <h1 className='text-xl font-bold text-center mb-2'>
            {t('settings')}
          </h1>
          <LobbySettings />
        </div>

        {/* Blue Team */}
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-blue-500 shadow-blue-500 shadow' />
            <h1 className='text-xl font-bold'>{t('blue_team')}</h1>
          </div>
          <div className='grid grid-cols-5 gap-3'>
            {/* هنا يترندر TeamMembers الأزرق (15) */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className='h-28 rounded border border-blue-400/50 bg-blue-500/5 flex items-center justify-center'
              >
                Slot {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* background */}
      <div
        className='absolute inset-0 bg-cover bg-center -z-30'
        style={{ backgroundImage: 'url(images/index_bg.png)' }}
      >
        <div className='absolute inset-0 bg-cover bg-center -z-30 bg-primary mix-blend-color opacity-50' />
      </div>
    </div>
  );
};
