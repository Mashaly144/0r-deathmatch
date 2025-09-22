import Popup from '@/components/Popup';
import StatCard from '@/components/StateCard';
import useData from '@/hooks/useData';
import { fetchNui } from '@/utils/fetchNui';
import { getProfileSrc } from '@/utils/misc';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';
export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { userProfile, createNewLobby, setPage } = useData();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [onlyUrl, setOnlyUrl] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handlePageCreateLobby = createNewLobby;

  const handleOpenLobbies = () => {
    setPage('lobbies');
  };

  const handleSave = async (value: string) => {
    try {
      const validUrl = new URL(value);
      setOnlyUrl(false);
      togglePopup();
      await fetchNui('nui:updateProfilePhoto', validUrl, true);
      return true;
    } catch (error) {
      setOnlyUrl(true);
      return false;
    }
  };

  return (
    <div className='relative w-full h-full'>
      <div className='relative w-full h-full container mx-auto flex justify-between items-center gap-6'>
        {/* HERO SECTION */}
        <div className='h-full flex-1 flex flex-col justify-center gap-10'>
          <div className='flex flex-col gap-5'>
            <img src='images/respect.png' alt='respect' className='w-1/2 ' />
            <h1 className='text-3xl font-bold'>مرحبا بكم في حرب العصابات</h1>
            <span className='text-white/80 text-lg '>
              أدخل ساحة حرب ريسبكت، حيث تواجه العصابات وجهاً لوجه في معارك شرسة.
              شكّل فريقك من 15 مقاتلاً، قاتلوا جنباً إلى جنب، واثبتوا من الأقوى
              في المدينة. كل جولة هي اختبار للمهارة، السرعة، والتكتيك — فإما
              النصر أو الخضوع للخصوم.
            </span>
          </div>
          <div className='flex flex-col gap-10'>
            {/* Create Lobby Button */}
            <button
              onClick={handlePageCreateLobby}
              className='relative flex flex-row items-center justify-center text-2xl font-bold rounded-md border border-violet-500 min-h-[80px] px-6
               transition-all duration-300 bg-violet-600/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/40 active:scale-95'
            >
              <span className='text-white'>انشاء لوبي</span>

              {/* Arrow */}
              <BiSolidLeftArrow className='w-6 h-6 absolute right-6 text-white' />
            </button>

            {/* Join Lobby Button */}
            <button
              onClick={handleOpenLobbies}
              style={{
                background: 'linear-gradient(135deg, #9460e7 0%, #6a32c9 100%)',
              }}
              className='relative flex flex-row items-center justify-center text-2xl font-bold rounded-md shadow-violetGlow min-h-[80px] px-6
               text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/60 hover:scale-[1.02] active:scale-95'
            >
              <span>دخول لوبي</span>

              {/* Arrow */}
              <BiSolidLeftArrow className='w-6 h-6 absolute right-6 text-white' />
            </button>
          </div>
        </div>
        {/* stats */}
        <div className='h-full flex flex-col justify-center gap-5 w-full lg:w-3/4 xl:w-2/3 2xl:w-3/5 3xl:w-1/2'>
          {/* profile */}
          <div
            className='relative w-full flex items-center gap-5 px-4 py-6 border border-white/15 rounded-lg'
            style={{
              background:
                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255,255,255,0.10) 0%, rgba(153,153,153,0.10) 100%)',
            }}
          >
            {/* Bar بنفسجي زي StatCard */}
            <div
              className='w-1 h-16'
              style={{
                background: '#9460e7',
                boxShadow: '0px 0px 9.6px 0px rgba(148,96,231,0.55)',
              }}
            ></div>

            {/* صورة البروفايل */}
            <div className='relative w-20 h-20 rounded-lg overflow-hidden border border-white/10'>
              {userProfile?.photo ? (
                <img
                  src={getProfileSrc(userProfile?.photo)}
                  alt={userProfile?.name}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full grid place-items-center text-white/40'>
                  <FaUserEdit size={32} />
                </div>
              )}

              {/* زر تعديل */}
              <button
                onClick={togglePopup}
                className='absolute -bottom-2 -right-2 w-7 h-7 rounded-md flex items-center justify-center border border-violet-400
                 bg-violet-600 hover:bg-violet-500 transition'
              >
                <FaUserEdit size={14} className='text-white' />
              </button>
            </div>

            {/* بيانات البروفايل */}
            <div className='flex flex-col overflow-hidden'>
              <h1 className='font-tajawal text-lg font-bold text-white overflow-hidden text-ellipsis'>
                {userProfile?.name}
              </h1>
              <div className='h-0.5 mt-2 bg-gradient-to-r from-violet-400 to-transparent w-2/3' />
              <h2 className='text-sm text-gray-300 mt-2'>
                {t('kd_rate')}: {userProfile?.kd_rate?.toFixed(2)}
              </h2>
            </div>
          </div>

          {/* state card */}
          <div className=' grid grid-cols-2 gap-4'>
            <h1 className='col-span-2 font-tajawal text-xl uppercase tracking-wider'>
              {t('main_statistics')}
            </h1>
            <StatCard
              title={t('matches_played')}
              value={userProfile.played_matches}
              icon='images/icons/matches_played.svg'
            />
            <StatCard
              title={t('kd_rate')}
              value={userProfile?.kd_rate?.toFixed(2)}
              icon='images/icons/kd_rate.svg'
            />

            <StatCard
              title={t('kills_total')}
              value={userProfile.kills}
              icon='images/icons/kills_total.svg'
            />
            <StatCard
              title={t('wins_total')}
              value={userProfile.wins}
              icon='images/icons/wins_total.svg'
            />

            <StatCard
              title={t('deaths_total')}
              value={userProfile.deaths}
              icon='images/icons/deaths_total.svg'
            />
            <StatCard
              title={t('loses_total')}
              value={userProfile.loses}
              icon='images/icons/loses_total.svg'
            />
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
      <Popup
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onSave={handleSave}
        error={onlyUrl ? t('only_url_error') : undefined}
      />
    </div>
  );
};
