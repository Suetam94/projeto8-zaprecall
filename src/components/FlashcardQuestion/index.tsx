import {
  FlashcardQuestionContainer,
  FlashcardQuestionImage,
  FlashcardQuestionImageDiv,
  FlashcardQuestionText,
  FlashcardQuestionTextDiv,
} from "./styles";

import setinha from "../../assets/img/setinha.png";
import { useEffect, useState } from "react";
import { request } from "../../libs/app";

interface QuestionProps {
  id: number;
  question: string;
}

interface FlashcardQuestionProps {
  onAnswerIsShowed: (shower: boolean) => void;
}

export function FlashcardQuestion({
  onAnswerIsShowed,
}: FlashcardQuestionProps) {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  useEffect(() => {
    request
      .get("/questions?apiKey=S19VeOIbHXr4DMzaDhGN0fQrvZOxp4tOuC7RvmRr&limit=1")
      .then((response) => setQuestions(response.data));
  }, []);

  return (
    <>
      {questions.map((question) => {
        return (
          <FlashcardQuestionContainer key={question.id}>
            <FlashcardQuestionTextDiv>
              <FlashcardQuestionText>{question.question}</FlashcardQuestionText>
            </FlashcardQuestionTextDiv>
            <FlashcardQuestionImageDiv onClick={() => onAnswerIsShowed(true)}>
              <FlashcardQuestionImage src={setinha} alt={"virar"} />
            </FlashcardQuestionImageDiv>
          </FlashcardQuestionContainer>
        );
      })}
    </>
  );
}
