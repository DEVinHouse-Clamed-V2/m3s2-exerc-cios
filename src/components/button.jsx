import { useContext } from "react";
import { FrasesProvider } from "../providers/provider";
import styled from "styled-components";

const Btn = styled.button`
  color: green;
  font-size: 1em;
  border-radius: 10px;
  background: black;
  margin-bottom: 20px;
`;

const Button = () => {
  const { setNConselho, nConselho } = useContext(FrasesProvider);
  return (
    <Btn
      onClick={() => {
        setNConselho(nConselho + 1);
      }}
    >
      Click
    </Btn>
  );
};

export default Button;
