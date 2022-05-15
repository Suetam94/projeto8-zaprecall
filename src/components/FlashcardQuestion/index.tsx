import {
  FlashcardQuestionContainer,
  FlashcardQuestionImage,
  FlashcardQuestionImageDiv,
  FlashcardQuestionText,
  FlashcardQuestionTextDiv,
} from "./styles";

import setinha from "../../assets/img/setinha.png";
import { QuestionProps } from "../FlashcardFrontFace";

interface FlashcardQuestionProps {
  onAnswerIsShowed: (shower: boolean) => void;
  questionInfo: QuestionProps;
}

export function FlashcardQuestion({
  onAnswerIsShowed,
  questionInfo,
}: FlashcardQuestionProps) {
  return (
    <>
      <FlashcardQuestionContainer key={questionInfo.id}>
        <FlashcardQuestionTextDiv>
          <FlashcardQuestionText>{questionInfo.question}</FlashcardQuestionText>
        </FlashcardQuestionTextDiv>
        <FlashcardQuestionImageDiv onClick={() => onAnswerIsShowed(true)}>
          <FlashcardQuestionImage src={setinha} alt={"virar"} />
        </FlashcardQuestionImageDiv>
      </FlashcardQuestionContainer>
    </>
  );
}
