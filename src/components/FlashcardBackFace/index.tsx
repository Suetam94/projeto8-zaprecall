import {
  FlashcardButton,
  FlashcardBackFaceAnswer,
  FlashcardBackFaceContainer,
  FlashcardBackFaceButtonsContainer,
} from "./styles";

export function FlashcardBackFace() {
  return (
    <FlashcardBackFaceContainer>
      <FlashcardBackFaceAnswer>
        JSX é uma sintaxe para escrever HTML dentro do JS
      </FlashcardBackFaceAnswer>
      <FlashcardBackFaceButtonsContainer>
        <FlashcardButton className={"button-red"}>Não lembrei</FlashcardButton>
        <FlashcardButton className={"button-orange"}>
          Quase não lembrei
        </FlashcardButton>
        <FlashcardButton className={"button-green"}>Zap!</FlashcardButton>
      </FlashcardBackFaceButtonsContainer>
    </FlashcardBackFaceContainer>
  );
}
