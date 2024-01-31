import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() =>{
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${number}`).then(response => response.json()).then(jsonResponse => setData(jsonResponse))
  }, [number]);

  return (
    <>
      {data.map((e,i) =>(
        <div key={i}>
          <img src={e.url} alt="image" width={250} height={250}/>
        </div>
      ))}

      <button onClick={() => setNumber(10)}>+</button>
    </>
  );
}
