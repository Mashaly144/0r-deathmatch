import useData from '@/hooks/useData';
import classNames from 'classnames';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const Header = ({ goHome }: { goHome?: boolean }) => {
  const { setPage } = useData();

  const handleGoBack = () => {
    if (!goHome) return;
    setPage('profile');
  };

  return (
    <div className='flex items-center gap-6 h-full '>
      <button
        onClick={handleGoBack}
        className={classNames(
          'p-2 contentBackground border-2 border-border rounded-sm',
          {
            'cursor-default': !goHome,
          }
        )}
      >
        {goHome ? (
          <MdKeyboardArrowLeft className='w-4 h-4 ' />
        ) : (
          <img src='images/icons/weapon_m4.svg' alt='weapon_m4' />
        )}
      </button>
      {/* <div className='h-full flex flex-col justify-evenly'>
        <div className='flex flex-col gap-5'>
          <img src='images/respect.png' alt='respect' className='w-1/2 ' />
          <h1 className=' text-6xl uppercase'>حرب ريسبكت</h1>
          <span className='text-white/55 text-lg '>
            أدخل ساحة حرب ريسبكت، حيث تواجه العصابات وجهاً لوجه في معارك شرسة.
            شكّل فريقك من 15 مقاتلاً، قاتلوا جنباً إلى جنب، واثبتوا من الأقوى في
            المدينة. كل جولة هي اختبار للمهارة، السرعة، والتكتيك — فإما النصر أو
            الخضوع للخصوم.
          </span>
        </div>
        <div className='flex flex-col gap-5'>
          <button className='text-lg font-bold rounded-lg border border-border bg-cardb min-h-[80px]'>
            دخول لوبي
          </button>
          <button
            className='text-lg font-bold rounded-lg border border-violet-500/50 transition hover:scale-cardbg min-h-[80px]'
            style={{
              background: 'linear-gradient(135deg, #9460e7 0%, #6a32c9 100%)',
            }}
          >
           انشاء لوبي
          </button>
        </div>
      </div> */}
    </div>
  );
};
