import useData from '@/hooks/useData';
import { useTranslation } from 'react-i18next';
import { LobbySettings } from './Partials/LobbySettings';
import { TeamMembers } from './Partials/TeamMembers';
import { TeamSelect } from './Partials/TeamSelect';
import { fetchNui } from '@/utils/fetchNui';
import { useEffect, useMemo, useState } from 'react';
import Alert from '@/components/Alert';

export const CreateLobby: React.FC = () => {
  const { t } = useTranslation();
  const { currentLobby, leaveLobby, userProfile } = useData();

  // هل المستخدم هو الليدر؟
  const isLeader = useMemo(
    () => currentLobby?.leader?.source === userProfile?.source,
    [currentLobby?.leader?.source, userProfile?.source]
  );

  // العضو الخاص بالمستخدم (لو موجود)
  const myMember = useMemo(
    () =>
      currentLobby?.members?.find((m: any) => m.source === userProfile?.source),
    [currentLobby?.members, userProfile?.source]
  );

  // هل اختار فريق؟ (0 أو 1)
  const hasTeam = useMemo(
    () =>
      typeof myMember?.team === 'number' &&
      (myMember.team === 0 || myMember.team === 1),
    [myMember?.team]
  );

  // عداد اللاعبين بكل فريق (للتنبيه قبل البدء)
  const redCount = useMemo(
    () => currentLobby?.members?.filter((m: any) => m.team === 1).length ?? 0,
    [currentLobby?.members]
  );
  const blueCount = useMemo(
    () => currentLobby?.members?.filter((m: any) => m.team === 0).length ?? 0,
    [currentLobby?.members]
  );

  // حالة اختيار الفريق (UI فقط) — بنزامنها مع الواقع
  const [teamSelected, setTeamSelected] = useState<boolean>(hasTeam);

  useEffect(() => {
    setTeamSelected(hasTeam);
  }, [hasTeam]);

  const [alertMessage, setAlertMessage] = useState<string | undefined>(
    undefined
  );
  const showAlert = (msg: string) => {
    setAlertMessage(msg);
    setTimeout(() => setAlertMessage(undefined), 4000);
  };

  const handleStartGame = async () => {
    if (!isLeader) {
      showAlert('فقط قائد اللوبي يمكنه البدء');
      return;
    }
    if (redCount === 0 || blueCount === 0) {
      showAlert('لازم يكون في لاعبين في الفريقين قبل البدء');
      return;
    }
    // سيب السيرفر يتحكم في باقي الشروط (زي "You can not start it alone !")
    const result = await fetchNui('nui:startOwnLobby', true, {
      state: false,
      message: 'You can not start it alone !',
    });
    if (!result.state && result.message) showAlert(result.message);
  };

  const handleLeaveLobby = leaveLobby;

  return (
    <div className='relative w-full h-full'>
      {alertMessage && <Alert message={alertMessage} />}

      {/* لو اللاعب لسه ما اختارش فريقه، افتح شاشة TeamSelect */}
      {teamSelected ? (
        <div className='relative w-full h-full container mx-auto py-16 flex flex-col gap-8 overflow-hidden'>
          <div className='flex flex-1 gap-6'>
            <div className='flex-1 flex flex-col gap-4'>
              <TeamMembers teamIdx={0} title={t('blue_team')} color='#53A3FF' />
            </div>

            <div className='w-1/3 flex flex-col gap-4 px-4'>
              <div className='flex items-center justify-between rounded p-3 bg-white/5'>
                <h1 className='text-lg text-white'>{t('lobby_leader')}</h1>
                <h2 className='text-lg font-bold truncate'>
                  {currentLobby?.leader?.name}
                </h2>
              </div>
              <LobbySettings />
              <div className='flex gap-4 w-full'>
                <button
                  onClick={handleStartGame}
                  className='px-6 py-3 w-full rounded border border-violet-400 bg-violet-600/20 hover:bg-violet-600/40 transition'
                >
                  بدء اللوبي
                </button>
                <button
                  onClick={handleLeaveLobby}
                  className='px-6 py-3 w-full rounded border border-red-400 bg-red-600/20 hover:bg-red-600/40 transition'
                >
                  مغادرة اللوبي
                </button>
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-4'>
              <TeamMembers teamIdx={1} title={t('red_team')} color='#FF6153' />
            </div>
          </div>
        </div>
      ) : (
        <TeamSelect state={setTeamSelected} />
      )}
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
