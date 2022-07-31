import { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [status, setStatus] = useState("all")

function saveLocalData(){
  localStorage.setItem('todos', JSON.stringify(todos))
}
function getLocalData(){
  if(localStorage.getItem('todos' === null)){
    localStorage.setItem('todos', JSON.stringify([]))
  }else{
    var data = JSON.parse(localStorage.getItem('todos'))
    console.log('data', data)
    console.log(localStorage)
  }
  setTodos(data)
}

useEffect(()=> {
    saveLocalData()
    getLocalData()
}, [])

  return (
    <div className="App">

      <h1>Todo-List</h1>

      <Form  
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      status={status}
      setStatus={setStatus}
      filteredTodos={filteredTodos}
      setFilteredTodos={setFilteredTodos}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
