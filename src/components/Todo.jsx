import {useEffect, useRef, useState} from 'react';
import { FaClipboardList, FaPlus } from 'react-icons/fa';
import Todoitem from './Todoitem';

const Todo = () => {

  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [] );
  const data = useRef();

  const addTodos = () =>{

    const inputText = data.current.value.trim();

    if(inputText== ""){
      return null;
    }
    // console.log(data.current.value.trim()); /// Trim input value to avoid empty or space-only todos

    const newTodo = {
      id: todos.length + 1,
      text: inputText, 
      isComplete: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    data.current.value = "";
  };

  const toggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.id !== id) })
    };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div className="place-self-center bg-white w-112.5 h-150 p-12 flex flex-col gap-8 rounded-lg">
      {/* Baslik Kismi  */}
      <h1 className="text-3xl font-semibold tracking-wider flex gap-2 items-center">
        <FaClipboardList /> Todo App{' '}
      </h1>

      {/*Arama Kismi*/}
      <div className="flex items-center bg-[#EEEEEE] rounded-full">
        <input
          ref={data}
          type="text"
          className="border-none outline-none p-3.5 flex-1 bg-transparent placeholder:text-slate-400"
          placeholder="Add a new Task"
        />
        <div className="bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer" onClick={()=> addTodos()}>
          <FaPlus className="size-6 text-[#EEEEEE]" />
        </div>
      </div>
      
      {/* Listelenen Görevler */}
      <div className='mt-5'>
          {todos.map((todo) => (
            <Todoitem key={todo.id} todo= {todo} toggle={toggle} deleteTodo={deleteTodo} />
          ))}
      </div>

    </div>
  );
};

export default Todo;
