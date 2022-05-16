import {
  FlashcardTitleContainer,
  FlashcardTitleText,
  FlashCardTitleImage,
} from "./styles";

import play from "../../assets/img/play.svg";

interface FlashcardTitleProps {
  questionIndex: number;
  onCardClicked: (clicked: boolean) => void;
  cardResult?: string;
}

export function FlashcardTitle({
  questionIndex,
  onCardClicked,
  cardResult,
}: FlashcardTitleProps) {
  function handleSummaryAndTitle() {
    onCardClicked(true);
  }

  return (
    <FlashcardTitleContainer onClick={() => handleSummaryAndTitle()}>
      <FlashcardTitleText>Pergunta {questionIndex}</FlashcardTitleText>
      {cardResult ? (
        <FlashCardTitleImage src={cardResult} alt="Imagem da questão" />
      ) : (
        <FlashCardTitleImage src={play} alt="Imagem da questão" />
      )}
    </FlashcardTitleContainer>
  );
}
