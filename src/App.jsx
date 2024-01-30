import { useState } from 'react'
import './App.css'

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 1; i <= 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i)
    });
  }
  return initialTodos;
}

function App() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
