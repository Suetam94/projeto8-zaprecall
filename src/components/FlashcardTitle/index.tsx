import {
  FlashcardTitleContainer,
  FlashcardTitleText,
  FlashCardTitleImage,
} from "./styles";

import play from "../../assets/img/play.svg";

interface FlashcardTitleProps {
  questionIndex: number;
}

export function FlashcardTitle({ questionIndex }: FlashcardTitleProps) {
  return (
    <FlashcardTitleContainer>
      <FlashcardTitleText>Pergunta {questionIndex}</FlashcardTitleText>
      <FlashCardTitleImage src={play} alt="Play" />
    </FlashcardTitleContainer>
  );
}
