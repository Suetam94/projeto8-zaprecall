import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import { FlashcardFrontFace, QuestionProps } from "../FlashcardFrontFace";
import { Loading } from "../Loading";
import { CardHeader, CardMain } from "./styles";
import { useEffect, useState } from "react";
import { request } from "../../libs/app";
import { FlashcardPartialSummary } from "../FlashcardPartialSummary";

interface CardProps {
  onRecallInit: (init: boolean) => void;
  flashcardGoal: number;
  deck: string;
}

export function Card({ onRecallInit, flashcardGoal, deck }: CardProps) {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [cardsSolved, setCardsSolved] = useState(0);
  const [summaryImage, setSummaryImage] = useState<Array<string>>([]);
  const [removeLoader, setRemoveLoader] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    request
      .get(
        `/questions?apiKey=${apiKey}&limit=20&category=${
          deck === "all" ? "" : deck
        }`
      )
      .then((response) => {
        setQuestions(
          response.data
            .filter((item: { correct_answer: any }) => item.correct_answer)
            .slice(0, 4)
        );
        setRemoveLoader(true);
      });
  }, []);

  return (
    <>
      <CardHeader>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </CardHeader>
      <CardMain>
        {!removeLoader && <Loading />}
        {questions.map((question, index) => {
          return (
            <FlashcardFrontFace
              onSummaryImage={setSummaryImage}
              summaryImage={summaryImage}
              cardsSolved={cardsSolved}
              onCardsSolved={setCardsSolved}
              cardNumber={index + 1}
              key={index}
              questionInfo={question}
            />
          );
        })}
      </CardMain>
      <FlashcardPartialSummary
        flashcardGoal={flashcardGoal}
        summaryImage={summaryImage}
        concluded={cardsSolved}
        onRecallInit={onRecallInit}
      />
    </>
  );
}
