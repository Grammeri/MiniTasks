import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Components/Todolist";

export type TodosPropsTypes = {
    id:string
    name:string
    complete:boolean
}

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App(props:TodosPropsTypes) {
    const [todos, setTodos] = useState([
        {id:v1(), name: "Todo-1", complete: true}
    ])
    const todoNameRef:any = useRef()
    useEffect(()=>{
          const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
          if(storedTodos) setTodos(storedTodos)
      },[])
    useEffect(()=>{
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    },[todos])

    const toggleTodo = (id:string) => {
            const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id===id)
        todo.complete =  !todo.complete
        setTodos(newTodos)
    }

const handleAddTodo = (e:any) =>{
const name = todoNameRef.current.value
    if(name ===  "")return
   setTodos(prevTodos => {
       return [...prevTodos, {id:v1(), name:name, complete:false}]
   })
    todoNameRef.current.value = null
}

const handleClearTodos = () => {
       const newTodos =  todos.filter(todo =>!todo.complete)
    setTodos(newTodos)
}

  return (
    <div className="App">
      {/*<Todolist todos={todos}/>*/}
      <Todolist todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoNameRef} type={"text"}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Add Clear Completed Todos</button>
        <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
    </div>
  );
}

export default App;















