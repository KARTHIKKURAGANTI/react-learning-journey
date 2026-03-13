import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuid } from 'uuid';

function App() {
  const [todo,setTodo] = useState();
  const [todoList,setTodoList] = useState([]);

  const onTodoInputChange = (event) => {
    setTodo(event.target.value);
  }

  const onTodoAddClick = () => {
    setTodoList([...todoList,{ id:uuid(), todo: todo,isCompleted: false}]);
  }
  const onDeleteClcik = (id) => {
    const updatedTodoList = todoList.filter(todo=>todo.id !== id);
    setTodoList(newTodoList);
  }
  const ontodoCheckChange = (id) => {
    const updatedTodoList = todoList.map(todo=>{
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo;
    })
    setTodoList(updatedTodoList);
  }


  return (
    <div className="App">
      <h1>My Wishlist</h1>
    <div>
      <input placeholder="Enter your wishlist item" onChange={onTodoInputChange}></input>
      <button onClick={onTodoAddClick}>Add</button>
    </div>
    <div>
      {
      todoList && todoList.length > 0 && todoList.map(todo=>(
        <div key = {todo.id}>
          <label>
            <input onChange={()=>ontodoCheckChange(todo.id)} type="checkbox" />
            <span className={todo.isCompleted?'strike-through':''}>{todo.todo}</span>
          </label>
          <button onClick={()=>(onDeleteClcik(todo.id))} >Delete</button>
        </div>
      ))
      }
    </div>
    </div>
  )
}

export default App
