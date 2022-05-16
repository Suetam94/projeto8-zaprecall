import { Home } from "./components/Home";
import "../src/assets/css/style.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { request } from "./libs/app";

export function App() {
  const [isRecallInit, setIsRecallInit] = useState(false);

  return (
    <>
      {!isRecallInit ? (
        <Home onRecallInit={setIsRecallInit} />
      ) : (
        <Card onRecallInit={setIsRecallInit} />
      )}
    </>
  );
}
