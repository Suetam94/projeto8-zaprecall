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
  cardsSolved: number;
  onCardsSolved: (solved: number) => void;
}

import play from "../../assets/img/play.svg";

export function FlashcardFrontFace({
  cardNumber,
  questionInfo,
  cardsSolved,
  onCardsSolved,
}: FlashcardFrontFaceProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  // const [cardsSolved, setCardsSolved] = useState(0);
  const [cardResult, setCardResult] = useState(play);

  return (
    <>
      {!isClicked ? (
        <FlashcardTitle
          questionIndex={cardNumber}
          onCardClicked={setIsClicked}
          cardResult={cardResult}
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
          onCardSolved={onCardsSolved}
          cardsSolved={cardsSolved}
          onCardResult={setCardResult}
          questionInfo={questionInfo}
        />
      )}
    </>
  );
}
