// import React from 'react';
// import { BiSolidLeftArrow } from 'react-icons/bi';

// type StatCardProps = {
//   title: string;
//   value: string | number;
// };

// const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
//   <div
//     className='flex items-center justify-between px-10 py-4 rounded border-2 border-border bg-cardbg/25'
//     dir='rtl'
//   >
//     <div className='flex items-center gap-5'>
//       {/* <div className='w-0 h-0 border-t-[15px] border-b-[15px] border-r-[15px] border-transparent border-r-violet-500'></div> */}
//       <BiSolidLeftArrow className='w-6 h-6 text-violet-500' />
//       <span className='text-white text-xl font-tajawal'>{title}</span>
//     </div>
//     <span className='text-white/80 text-xl font-bold'>{value}</span>
//   </div>
// );

// export default StatCard;

import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: string; // image path
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div
      className='relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded'
      style={{
        background:
          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
      }}
    >
      {/* Colored Bar */}
      <div
        className='w-1 h-9'
        style={{
          background: '#FFFFFF',
          boxShadow: `0px 0px 9.6px 0px #FFFFFF`,
        }}
      ></div>

      {/* Title */}
      <h1 className='text-xl font-tajawal font-bold'>{title}</h1>

      {/* Value */}
      <div className='mr-auto relative top-3 left-6'>
        <h1
          className='font-supercharge w-full ml-2'
          style={{
            fontSize: 64,
            background:
              'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {value}
        </h1>
      </div>
    </div>
  );
};

export default StatCard;
