import {
  FlashcardQuestionContainer,
  FlashcardQuestionImage,
  FlashcardQuestionImageDiv,
  FlashcardQuestionText,
  FlashcardQuestionTextDiv,
} from "./styles";

import setinha from "../../assets/img/setinha.png";

export function FlashcardQuestion() {
  return (
    <FlashcardQuestionContainer>
      <FlashcardQuestionTextDiv>
        <FlashcardQuestionText>O que é JSX?</FlashcardQuestionText>
      </FlashcardQuestionTextDiv>
      <FlashcardQuestionImageDiv>
        <FlashcardQuestionImage src={setinha} alt={"virar"} />
      </FlashcardQuestionImageDiv>
    </FlashcardQuestionContainer>
  );
}
