import React from 'react';
import StateCard from '@/components/StateCard';
import Popup from '@/components/Popup';
import useData from '@/hooks/useData';
import { fetchNui } from '@/utils/fetchNui';
import { getProfileSrc } from '@/utils/misc';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div className='relative w-full h-full' style={{ direction: 'rtl' }}>
      <div className='w-full h-full container mx-auto max-w-[80%] flex justify-between items-center gap-20'>
        {/* states section */}
        <div className='flex flex-col gap-10 flex-1'>
          {/* profile card */}
          <div className='relative w-full flex gap-5 border-2 border-border rounded p-4 col-span-3 bg-cardbg/25'>
            <div className='relative min-w-20 w-20 min-h-20 h-20 rounded'>
              <img
                src={getProfileSrc(userProfile?.photo)}
                alt='profile'
                className='absolute inset-0 z-[1]'
              />
              <button
                onClick={togglePopup}
                className='absolute z-[2] -bottom-2 -left-2 w-5 h-5 bg-white/80  rounded-sm flex items-center justify-center'
              >
                <img src='images/icons/pen.svg' alt='pen' />
              </button>
              {/* <div className='relative min-w-20 min-h-20 blur-lg z-0'>
                <img src={getProfileSrc(userProfile?.photo)} alt='profile' />
              </div> */}
            </div>
            <div className='flex flex-col w-full whitespace-nowrap overflow-hidden'>
              <h1 className=' overflow-hidden text-ellipsis text-xl font-semibolds'>
                {/* {userProfile?.name} */}
                عبداللة مشالي
              </h1>
              <h1 className=' overflow-hidden text-ellipsis text-lg text-lightWhite'>
                {/* {userProfile?.name} */}
                عصابه الغرب
              </h1>
              <h1 className='mt-3 text-sm'>
                {t('kd_rate')}
                {': '}
                {userProfile?.kd_rate?.toFixed(2)}
              </h1>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl text-lightWhite'>الاحصائيات الرئيسية :</h1>
            {/* state card */}
            <StateCard
              title='عدد المباريات'
              value={userProfile.played_matches}
            />
            <StateCard title='معدل المستوي' value={userProfile.kd_rate} />
            <StateCard title='اجمالي القتلات' value={userProfile.kills} />
            <StateCard title='اجمالي الانتصارات' value={userProfile.wins} />
            <StateCard title='اجمالي الموت' value={userProfile.deaths} />
            <StateCard title='اجمالي الخسائر' value={userProfile.loses} />
          </div>
        </div>
        {/* image section */}
        <div className='flex justify-end h-full flex-1'>
          <img src='images/556.png' alt='avatar' />
        </div>

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
            <button
              onClick={handlePageCreateLobby}
              className='relative flex flex-row items-center justify-center text-2xl font-bold rounded-[2px] border border-border bg-cardb min-h-[80px]'
            >
              <span>انشاء لوبي</span>
              <div className='self-end w-0 h-0 border-t-[15px] border-b-[15px] border-r-[15px] border-transparent  border-r-violet-500  absolute right-10 top-1/2 -translate-y-1/2 ' />
            </button>
            <button
              onClick={handleOpenLobbies}
              style={{
                background: 'linear-gradient(135deg, #9460e7 0%, #6a32c9 100%)',
              }}
              className='relative flex flex-row items-center justify-center text-2xl font-bold rounded-[2px] shadow-violetGlow bg-cardb min-h-[80px]'
            >
              <span> دخول لوبي</span>
              <div className='self-end w-0 h-0 border-t-[15px] border-b-[15px] border-r-[15px] border-transparent  border-r-white  absolute right-10 top-1/2 -translate-y-1/2 ' />
            </button>
          </div>
        </div>
      </div>

      {/* background */}
      <div
        className='absolute inset-0 bg-cover bg-center -z-30'
        style={{ backgroundImage: 'url(images/mainBG.png)' }}
      ></div>
      <Popup
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onSave={handleSave}
        error={onlyUrl ? t('only_url_error') : undefined}
      />
    </div>
  );
};
