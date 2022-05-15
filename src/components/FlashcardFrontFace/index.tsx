import { FlashcardTitle } from "../FlashcardTitle";
import { useEffect, useState } from "react";
import { FlashcardQuestion } from "../FlashcardQuestion";
import { FlashcardBackFace } from "../FlashcardBackFace";
import { request } from "../../libs/app";

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

export function FlashcardFrontFace() {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  useEffect(() => {
    request
      .get("/questions?apiKey=S19VeOIbHXr4DMzaDhGN0fQrvZOxp4tOuC7RvmRr&limit=1")
      .then((response) => setQuestions(response.data));
  }, []);

  return (
    <>
      {!isClicked ? (
        <FlashcardTitle questionIndex={1} onCardClicked={setIsClicked} />
      ) : !showAnswer ? (
        questions.map((question) => {
          return (
            <FlashcardQuestion
              questionInfo={question}
              onAnswerIsShowed={setShowAnswer}
            />
          );
        })
      ) : (
        questions.map((question) => {
          return <FlashcardBackFace questionInfo={question} />;
        })
      )}
    </>
  );
}
