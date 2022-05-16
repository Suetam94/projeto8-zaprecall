import {
  FlashcardButton,
  FlashcardBackFaceAnswer,
  FlashcardBackFaceContainer,
  FlashcardBackFaceButtonsContainer,
} from "./styles";
import { QuestionProps } from "../FlashcardFrontFace";

import check from "../../assets/img/check.svg";
import doubt from "../../assets/img/doubt.svg";
import error from "../../assets/img/error.svg";

interface FlashcardQuestionProps {
  questionInfo: QuestionProps;
  onTitleClicked: (clicked: boolean) => void;
  onAnswersShowed: (clicked: boolean) => void;
  onCardSolved: (solved: number) => void;
  onCardResult: (image: string) => void;
  cardsSolved: number;
}

export function FlashcardBackFace({
  questionInfo: { answers, correct_answer },
  onTitleClicked,
  onAnswersShowed,
  cardsSolved,
  onCardSolved,
  onCardResult,
}: FlashcardQuestionProps) {
  function handleReturnAfterFeedback(buttonClicked: string) {
    onCardSolved(cardsSolved++);

    if (buttonClicked === "error") {
      onCardResult(error);
    } else if (buttonClicked === "doubt") {
      onCardResult(doubt);
    } else if (buttonClicked === "check") {
      onCardResult(check);
    }

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
          onClick={() => handleReturnAfterFeedback("error")}
          className={"button-red"}
        >
          Não lembrei
        </FlashcardButton>
        <FlashcardButton
          onClick={() => handleReturnAfterFeedback("doubt")}
          className={"button-orange"}
        >
          Quase não lembrei
        </FlashcardButton>
        <FlashcardButton
          onClick={() => handleReturnAfterFeedback("check")}
          className={"button-green"}
        >
          Zap!
        </FlashcardButton>
      </FlashcardBackFaceButtonsContainer>
    </FlashcardBackFaceContainer>
  );
}
