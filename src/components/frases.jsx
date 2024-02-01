import { useContext } from "react";
import { FrasesProvider } from "../providers/provider";
import styled from "styled-components";

const DivFrases = styled.div`
  background: #959191d1;
  color: white;
  margin-bottom: 5px;
`;

export default function Frases() {
  const { frases, setNConselho, nConselho } = useContext(FrasesProvider);

  return (
    <>
      {frases.map((frase, index) => (
        <DivFrases key={index}>{frase}</DivFrases>
      ))}
    </>
  );
}
