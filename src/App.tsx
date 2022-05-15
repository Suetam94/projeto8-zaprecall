import { Home } from "./components/Home";
import "../src/assets/css/style.css";
import { useState } from "react";
import { Card } from "./components/Card";

export function App() {
  const [isRecallInit, setIsRecallInit] = useState(false);
  return (
    <>{!isRecallInit ? <Home onRecallInit={setIsRecallInit} /> : <Card />}</>
  );
}
