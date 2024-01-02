import React, {useState,useRef} from "react"
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import squareCheck from '@fortawesome/free-solid-svg-icons'
/* eslint-disable no-undef */

function App() { 
  const [Todo, setTodo] = useState([]);
    const inputRef =useRef() 
  const handelAddBtn=()=> {
    //get value from input 
    const text=inputRef.current.value
    const newTask={completed :false ,text }
    //set value to state  
    setTodo([...Todo,newTask])
    //clear input value 
    inputRef.current.value=""
  }
  const handleTask=(index)=>{
      const newToDo=[...Todo]
      newToDo[index].completed=!newToDo[index].completed
      setTodo(newToDo)
  }
  const handleDelete=(index)=>{
    const newToDo=[...Todo]
    newToDo.splice(index ,1 )
    setTodo(newToDo)
  }
  return (
    <div className="App">
      <h2> My to do list </h2>
      <input ref={inputRef} placeholder="enter task ..."/>
      <button onClick={handelAddBtn}> Add </button>
      <ul>
      {Todo.map(({text,completed},index)=>{
        return (
          <div className="toDoLi">
          <li className={completed? "done" :""} key={index} onClick={()=>handleTask(index)}>{text}</li>
          <span onClick={()=>handleDelete(index)}>✖️</span>
          </div>)
        
      })}
      </ul>
      
      
    </div>
  );
}

export default App;
