import { FlashcardTitle } from "../FlashcardTitle";
import { useState } from "react";
import { FlashcardQuestion } from "../FlashcardQuestion";
import { FlashcardBackFace } from "../FlashcardBackFace";

export interface QuestionProps {
  id: number;
  question: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string;
    answer_f: string;
  };
  correct_answer: string;
}

interface FlashcardFrontFaceProps {
  cardNumber: number;
  questionInfo: QuestionProps;
}

export function FlashcardFrontFace({
  cardNumber,
  questionInfo,
}: FlashcardFrontFaceProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      {!isClicked ? (
        <FlashcardTitle
          questionIndex={cardNumber}
          onCardClicked={setIsClicked}
        />
      ) : !showAnswer ? (
        <FlashcardQuestion
          questionInfo={questionInfo}
          onAnswerIsShowed={setShowAnswer}
        />
      ) : (
        <FlashcardBackFace
          onAnswersShowed={setShowAnswer}
          onTitleClicked={setIsClicked}
          questionInfo={questionInfo}
        />
      )}
    </>
  );
}
