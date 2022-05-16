import { Home } from "./components/Home";
import "../src/assets/css/style.css";
import { useState } from "react";
import { Card } from "./components/Card";

export function App() {
  const [isRecallInit, setIsRecallInit] = useState(false);
  const [flashcardGoal, setFlashcardGoal] = useState(4);
  return (
    <>
      {!isRecallInit ? (
        <Home
          onFlashcardGoal={setFlashcardGoal}
          onRecallInit={setIsRecallInit}
        />
      ) : (
        <Card flashcardGoal={flashcardGoal} onRecallInit={setIsRecallInit} />
      )}
    </>
  );
}
