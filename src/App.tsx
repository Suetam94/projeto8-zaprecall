import { Home } from "./components/Home";
import "../src/assets/css/style.css";
import { useState } from "react";
import {Card} from "./components/Card";

export function App() {
  const [isRecallInit, setIsRecallInit] = useState(false);
  return (
    <>
      <Card />
      {/*{!isRecallInit ? (*/}
      {/*  <Home onRecallInit={setIsRecallInit} />*/}
      {/*) : (*/}
      {/*  alert("iniciado")*/}
      {/*)}*/}
    </>
  );
}
