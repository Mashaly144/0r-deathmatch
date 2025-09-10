import useData from '@/hooks/useData';
import { fetchNui } from '@/utils/fetchNui';
import { isEnvBrowser } from '@/utils/misc';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const LobbySettings = () => {
  const { t } = useTranslation();
  const { currentLobby, userProfile, playableWeapons } = useData();

  const getMapPic = (name: string) => {
    if (isEnvBrowser()) return 'images/maps/example.png';
    return 'images/maps/' + name;
  };

  const handleChangeLobbyMode = async (mode: 2 | 3 | 4 | 5) => {
    if (currentLobby.leader?.source != userProfile.source) return;
    if (mode == currentLobby.mode) return;
    await fetchNui('nui:changeGameMode', mode, true);
  };
  const handleChangeLobbyWeapon = async (weapon: string) => {
    if (currentLobby.leader?.source != userProfile.source) return;
    if (weapon == currentLobby.weapon) return;
    await fetchNui('nui:changeGameWeapon', weapon, true);
  };

  const changeGameTime = async (type: 'up' | 'down') => {
    await fetchNui('nui:changeGameTime', type, true);
  };
  const changeGameMap = async (type: 'next' | 'prev') => {
    await fetchNui('nui:changeGameMap', type, true);
  };

  const PlayingModeButton = ({
    mode,
    label,
  }: {
    mode: 2 | 3 | 4 | 5;
    label: string;
  }) => (
    <button
      onClick={() => handleChangeLobbyMode(mode)}
      className={classNames('px-8 py-2.5', {
        'cursor-not-allowed': currentLobby.leader?.source != userProfile.source,
      })}
      style={{
        borderRadius: '4px',
        border: currentLobby.mode == mode ? '1px solid #753ada' : 'unset',
        background:
          currentLobby.mode == mode
            ? 'radial-gradient(50% 50% at 50% 50%, #753ada 0%, #753ada 100%)'
            : 'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
        boxShadow:
          currentLobby.mode == mode
            ? '0px 0px 12.8px 0px #753ada inset'
            : 'unset',
      }}
    >
      <h1 className=''>{label}</h1>
    </button>
  );

  const PlayingWeaponButton = ({ weapon }: { weapon: string }) => (
    <button
      onClick={() => handleChangeLobbyWeapon(weapon)}
      className={classNames('px-4 py-2.5', {
        'cursor-not-allowed': currentLobby.leader?.source != userProfile.source,
      })}
      style={{
        borderRadius: '4px',
        border: currentLobby.weapon == weapon ? '1px solid #753ada' : 'unset',
        background:
          currentLobby.weapon == weapon
            ? 'radial-gradient(50% 50% at 50% 50%, #753ada 0%, #753ada 100%)'
            : 'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
        boxShadow:
          currentLobby.weapon == weapon
            ? '0px 0px 12.8px 0px #753ada inset'
            : 'unset',
      }}
    >
      <h1 className=' uppercase text-sm'>
        {weapon.startsWith('weapon_') ? weapon.replace('weapon_', '') : weapon}
      </h1>
    </button>
  );

  return (
    <div className='flex flex-col gap-4 h-full w-full'>
      <div
        className='relative flex items-center gap-3 rounded p-4'
        style={{
          height: 66,
          background:
            'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
        }}
      >
        <div
          className='rounded w-12 h-12 flex items-center justify-center'
          style={{
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          }}
        >
          <img src='images/icons/gear.svg' alt='gear' />
        </div>
        <div className='overflow-hidden'>
          <h1 className=' text-xs text-white/55'>{t('lobby')}</h1>
          <h1 className=' text-lg overflow-hidden text-ellipsis'>
            {t('settings')}
          </h1>
        </div>
      </div>
      <div
        className='relative flex items-center gap-3 rounded px-4 py-3'
        style={{
          height: 66,
          background:
            'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
        }}
      >
        <div className='w-full flex items-center gap-3'>
          <div
            className='rounded w-12 h-12 flex items-center justify-center'
            style={{
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            }}
          >
            <img src='images/icons/gear.svg' alt='gear' />
          </div>
          <div className='overflow-hidden'>
            <h1 className=' text-lg overflow-hidden text-ellipsis'>
              {t('current_map')}
            </h1>
          </div>
        </div>
        <button
          onClick={() => changeGameMap('next')}
          className='rounded flex items-center justify-center bg-[#753ada] border-2 border-[#753ada]'
        >
          <MdKeyboardArrowLeft className='w-9 h-9' />
        </button>
        <div className='ml-auto px-14 bg-black/20 flex items-center justify-center h-full rounded'>
          <h1 className=' text-sm whitespace-nowrap'>
            {currentLobby?.map?.name}
          </h1>
        </div>
        <button
          onClick={() => changeGameMap('prev')}
          className='rounded flex items-center justify-center bg-[#753ada] border-2 border-[#753ada]'
        >
          <MdKeyboardArrowLeft className='w-9 h-9 rotate-180' />
        </button>
      </div>
      <div
        className='p-2 rounded relative h-full'
        style={{
          background:
            'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
        }}
      >
        <div
          className='w-full h-full rounded bg-[#121212] max-xl:h-80'
          style={{
            background: `url(${getMapPic(
              currentLobby?.map?.image
            )}) lightgray 50% / cover no-repeat`,
          }}
        />
      </div>
      <div className='mt-auto flex flex-col gap-3 w-full'>
        <div className='flex items-center gap-3'>
          <div
            className='relative flex items-center gap-3 rounded px-4 py-3 w-full'
            style={{
              height: 66,
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            }}
          >
            <div
              className='rounded w-12 h-12 min-w-12 flex items-center justify-center'
              style={{
                background:
                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
              }}
            >
              <img src='images/icons/gear.svg' alt='gear' />
            </div>
            <div className='overflow-hidden whitespace-nowrap min-w-min mr-2 max-2xl:hidden'>
              <h1 className=' text-xs text-white/55'>{t('lobby')}</h1>
              <h1 className=' text-lg overflow-hidden text-ellipsis'>
                {t('lobby_name')}
              </h1>
            </div>
            <div className='w-full h-full ml-auto bg-black/20 flex items-center justify-center rounded select-none overflow-hidden px-4'>
              <h1 className=' text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                {currentLobby?.name}
              </h1>
            </div>
          </div>
          <div
            className='relative flex items-center gap-3 rounded px-4 py-3'
            style={{
              height: 66,
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            }}
          >
            <button
              onClick={() => changeGameTime('down')}
              className='w-12 h-12 rounded flex items-center justify-center bg-[#753ada] border-2 border-[#753ada]'
            >
              <MdKeyboardArrowLeft className='w-full h-full' />
            </button>
            <div className='w-20 ml-auto bg-black/20 flex items-center justify-center h-full rounded'>
              <h1 className=' text-sm whitespace-nowrap'>
                {currentLobby.game_time}
                {' : 00'}
              </h1>
            </div>
            <button
              onClick={() => changeGameTime('up')}
              className='w-12 h-12 rounded flex items-center justify-center bg-[#753ada] border-2 border-[#753ada]'
            >
              <MdKeyboardArrowLeft className='w-full h-full rotate-180' />
            </button>
          </div>
        </div>
        <div
          className='relative flex items-center gap-3 rounded p-4 w-full'
          style={{
            height: 66,
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          }}
        >
          <div
            className='rounded w-12 h-12 min-w-12 flex items-center justify-center'
            style={{
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            }}
          >
            <img src='images/icons/gear.svg' alt='gear' />
          </div>
          <div className='overflow-hidden whitespace-nowrap max-2xl:hidden'>
            <h1 className=' text-xs text-white/55'>{t('lobby')}</h1>
            <h1 className=' text-lg overflow-hidden text-ellipsis'>
              {t('playing_mode')}
            </h1>
          </div>
          <div className='ml-auto flex items-center gap-2.5'>
            {['2x2', '3x3', '4x4', '5x5'].map((label) => (
              <PlayingModeButton
                key={label}
                label={label}
                mode={
                  label == '2x2'
                    ? 2
                    : label == '3x3'
                    ? 3
                    : label == '4x4'
                    ? 4
                    : 5
                }
              />
            ))}
          </div>
        </div>
        <div
          className='relative flex items-center gap-3 rounded p-4'
          style={{
            height: 66,
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          }}
        >
          <div
            className='rounded w-12 h-12 min-w-12 flex items-center justify-center'
            style={{
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            }}
          >
            <img src='images/icons/gear.svg' alt='gear' />
          </div>
          <div className='whitespace-nowrap max-2xl:hidden w-min'>
            <h1 className=' text-xs text-white/55'>{t('lobby')}</h1>
            <h1 className=' text-lg overflow-hidden text-ellipsis'>
              {t('playing_weapon')}
            </h1>
          </div>
          <div className='ml-auto flex items-center gap-2.5 overflow-auto scrollbar-hide'>
            {playableWeapons.map((name, i) => (
              <PlayingWeaponButton key={i} weapon={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
