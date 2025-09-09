import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { IoIosClose } from 'react-icons/io';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  error?: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onSave, error }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSave = () => {
    onSave(inputValue);
  };

  return (
    <div
      className={classNames(
        'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50',
        { hidden: !isOpen }
      )}
    >
      <div className='relative bg-[#121212] p-6 rounded-lg shadow-lg w-96 border border-white/15'>
        <h2 className='text-xl font-bold mb-4 '>{t('new_profile_photo')}</h2>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='w-full  p-2 border border-white/20 rounded-md mb-4 bg-transparent ring-0 outline-none'
          placeholder='url...'
        />
        <div className='flex justify-end'>
          <button
            onClick={handleSave}
            className='px-4 py-2 text-white rounded hover:brightness-125 bg-primary'
          >
            <h1 className=' text-sm'>{t('save')}</h1>
          </button>
        </div>
        <button
          onClick={onClose}
          className='absolute top-2 left-2 opacity-50 hover:opacity-100 transition-opacity'
        >
          <IoIosClose className='w-6 h-6' />
        </button>
        {error && (
          <div className='absolute bottom-2 left-4'>
            <h1 className=' text-[#FF6153] text-sm'>{error}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
