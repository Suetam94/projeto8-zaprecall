import { FlashcardTitle } from "../FlashcardTitle";
import { useState } from "react";
import { FlashcardQuestion } from "../FlashcardQuestion";
import { FlashcardBackFace } from "../FlashcardBackFace";

export function FlashcardFrontFace() {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      {!isClicked ? (
        <FlashcardTitle questionIndex={1} onCardClicked={setIsClicked} />
      ) : !showAnswer ? (
        <FlashcardQuestion onAnswerIsShowed={setShowAnswer} />
      ) : (
        <FlashcardBackFace />
      )}
    </>
  );
}
