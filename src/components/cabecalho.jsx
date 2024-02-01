import styled from "styled-components";

const DivCabecalho = styled.div`
  background-color: cyan;
  color: black;
  margin-bottom: 10px;
`;

const H1Cabecalho = styled.h1`
  color: purple;
`;

const Cabecalho = ({ texto }) => {
  return (
    <DivCabecalho>
      <H1Cabecalho>{texto}</H1Cabecalho>
    </DivCabecalho>
  );
};

export default Cabecalho;
