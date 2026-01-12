import React from 'react';
import { FaRegCircle, FaRegTrashAlt, FaRegCheckCircle } from 'react-icons/fa';

const Todoitem = () => {
  return (
    <div className='w-full flex items-center px-2 py-4 gap-2 border-b pb-4 cursor-pointer'>
      <FaRegCircle className='text-[#00ADB5] size-5'/>
      <p className='flex-1'>Lorem ipsum dolor sit</p>
      <FaRegTrashAlt className='text-[#e01056] size-5 hover:scale-110 transition-all' />
    </div>
  );
};

export default Todoitem;
