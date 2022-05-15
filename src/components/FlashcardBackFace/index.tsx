import {
  FlashcardButton,
  FlashcardBackFaceAnswer,
  FlashcardBackFaceContainer,
  FlashcardBackFaceButtonsContainer,
} from "./styles";
import { QuestionProps } from "../FlashcardFrontFace";

interface FlashcardQuestionProps {
  questionInfo: QuestionProps;
}

export function FlashcardBackFace({
  questionInfo: { answers, correct_answer },
}: FlashcardQuestionProps) {
  return (
    <FlashcardBackFaceContainer>
      <FlashcardBackFaceAnswer>
        {/*// @ts-ignore*/}
        {answers[correct_answer]}
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
