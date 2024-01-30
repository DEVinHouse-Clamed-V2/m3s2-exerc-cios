import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(["Fazer comida"])
  const [todo, setTodo] = useState("")

  const handleAddTodo = (t) => {
    setTodos([
      ...todos,
      t
    ]);
  }

  const deleteTodo = (t) =>{
    setTodos(todos.filter(e => e !== t))
  }

  return(
    <>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button onClick={() => {
      handleAddTodo(todo)
      setTodo("")
    }}>add</button>
    {todos.map((e,i) => (
      <div className='div-container' key={i}>
        <p>{e}</p>
        <button onClick={() => deleteTodo(e)}>delete</button>
      </div>
    ))}
    </>
  )
}

export default App
