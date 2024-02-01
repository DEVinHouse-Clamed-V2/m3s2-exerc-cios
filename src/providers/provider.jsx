import { createContext, useContext, useEffect, useState } from "react";

export const FrasesProvider = createContext();

export default function MainProvider({ children }) {
  const [frases, setFrases] = useState([]);
  const [nConselho, setNConselho] = useState(1);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${nConselho}`)
      .then((response) => response.json())
      .then((data) => {
        setFrases([...frases, data.slip.advice]);
      })
      .catch((error) => console.error(error));
  }, [nConselho]);

  return (
    <FrasesProvider.Provider
      value={{ frases, setFrases, nConselho, setNConselho }}
    >
      {children}
    </FrasesProvider.Provider>
  );
}
