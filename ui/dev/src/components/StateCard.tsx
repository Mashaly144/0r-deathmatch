import React from 'react';

type StatCardProps = {
  title: string;
  value: string | number;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div
    className='flex items-center justify-between px-10 py-4 rounded border-2 border-border bg-cardbg/25'
    dir='rtl'
  >
    <div className='flex items-center gap-5'>
      <div className='w-0 h-0 border-t-[15px] border-b-[15px] border-r-[15px] border-transparent border-r-violet-500'></div>
      <span className='text-white text-xl font-tajawal'>{title}</span>
    </div>
    <span className='text-white/80 text-xl font-bold'>{value}</span>
  </div>
);

export default StatCard;
