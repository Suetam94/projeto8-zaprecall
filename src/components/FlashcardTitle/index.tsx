import {
  FlashcardTitleContainer,
  FlashcardTitleText,
  FlashCardTitleImage,
} from "./styles";

import play from "../../assets/img/play.svg";

interface FlashcardTitleProps {
  questionIndex: number;
  onCardClicked: (clicked: boolean) => void;
}

export function FlashcardTitle({
  questionIndex,
  onCardClicked,
}: FlashcardTitleProps) {
  return (
    <FlashcardTitleContainer onClick={() => onCardClicked(true)}>
      <FlashcardTitleText>Pergunta {questionIndex}</FlashcardTitleText>
      <FlashCardTitleImage src={play} alt="Play" />
    </FlashcardTitleContainer>
  );
}
