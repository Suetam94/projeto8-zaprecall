import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import { FlashcardFrontFace, QuestionProps } from "../FlashcardFrontFace";
import { CardHeader, CardMain } from "./styles";
import { useEffect, useState } from "react";
import { request } from "../../libs/app";
import { FlashcardPartialSummary } from "../FlashcardPartialSummary";

export function Card() {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [cardsSolved, setCardsSolved] = useState(0);
  const [summaryImage, setSummaryImage] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    request
      .get(
        "/questions?apiKey=S19VeOIbHXr4DMzaDhGN0fQrvZOxp4tOuC7RvmRr&limit=20"
      )
      .then((response) =>
        setQuestions(
          response.data
            .filter((item: { correct_answer: any }) => item.correct_answer)
            .slice(0, 4)
        )
      );
  }, []);

  return (
    <>
      <CardHeader>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </CardHeader>
      <CardMain>
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
        summaryImage={summaryImage}
        concluded={cardsSolved}
      />
    </>
  );
}
