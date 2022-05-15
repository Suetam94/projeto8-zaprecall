import {
  FlashcardButton,
  FlashcardBackFaceAnswer,
  FlashcardBackFaceContainer,
  FlashcardBackFaceButtonsContainer,
} from "./styles";
import { QuestionProps } from "../FlashcardFrontFace";

interface FlashcardQuestionProps {
  questionInfo: QuestionProps;
  onTitleClicked: (clicked: boolean) => void;
  onAnswersShowed: (clicked: boolean) => void;
}

export function FlashcardBackFace({
  questionInfo: { answers, correct_answer },
  onTitleClicked,
  onAnswersShowed,
}: FlashcardQuestionProps) {
  function handleReturnAfterFeedback() {
    onTitleClicked(false);
    onAnswersShowed(false);
  }

  return (
    <FlashcardBackFaceContainer>
      <FlashcardBackFaceAnswer>
        {/*// @ts-ignore*/}
        {answers[correct_answer]}
      </FlashcardBackFaceAnswer>
      <FlashcardBackFaceButtonsContainer>
        <FlashcardButton
          onClick={handleReturnAfterFeedback}
          className={"button-red"}
        >
          Não lembrei
        </FlashcardButton>
        <FlashcardButton
          onClick={handleReturnAfterFeedback}
          className={"button-orange"}
        >
          Quase não lembrei
        </FlashcardButton>
        <FlashcardButton
          onClick={handleReturnAfterFeedback}
          className={"button-green"}
        >
          Zap!
        </FlashcardButton>
      </FlashcardBackFaceButtonsContainer>
    </FlashcardBackFaceContainer>
  );
}
