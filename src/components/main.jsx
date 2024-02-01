import { useContext, useEffect, useState } from "react";
import MainProvider from "../providers/provider";
import Frases from "./frases";
import Button from "./button";
import "./main.css";
import Cabecalho from "./cabecalho";

export function Main() {
  return (
    <>
      <MainProvider>
        <div id="container">
          <Cabecalho texto="CONSELHOS PARA VIDA" />
          <Button />
          <Frases />
        </div>
      </MainProvider>
    </>
  );
}
