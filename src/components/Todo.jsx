import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Todoitem from './Todoitem';

const Todo = () => {
  return (
    <div className="place-self-center bg-white w-112.5 h-150 p-12 flex flex-col gap-8 rounded-lg">
      {/* Baslik Kismi  */}
      <h1 className="text-3xl font-semibold tracking-wider flex gap-2 items-center">
        <FaClipboardList /> Todo App{' '}
      </h1>

      {/*Arama Kismi*/}
      <div className="flex items-center bg-[#EEEEEE] rounded-full">
        <input
          type="text"
          className="border-none outline-none p-3.5 flex-1 bg-transparent placeholder:text-slate-400"
          placeholder="Add a new Task"
        />
        <div className="bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer">
          <FaPlus className="size-6 text-[#EEEEEE]" />
        </div>
      </div>
      
      {/* Listelenen Görevler */}
      <div className='mt-5'>
        <Todoitem />
      </div>

    </div>
  );
};

export default Todo;
