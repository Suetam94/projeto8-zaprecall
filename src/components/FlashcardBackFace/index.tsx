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
  onCardSolved: any;
  onCardResult: (image: string) => void;
  cardsSolved: number;
  onSummaryImage: (image: Array<string>) => void;
  summaryImage: Array<string>;
}

export function FlashcardBackFace({
  questionInfo: { answers, correct_answer },
  onTitleClicked,
  onAnswersShowed,
  cardsSolved,
  onCardSolved,
  onCardResult,
  onSummaryImage,
  summaryImage,
}: FlashcardQuestionProps) {
  function handleReturnAfterFeedback(buttonClicked: string) {
    if (buttonClicked === "error") {
      onCardResult(error);
      onSummaryImage([...summaryImage, error]);
    } else if (buttonClicked === "doubt") {
      onCardResult(doubt);
      onSummaryImage([...summaryImage, doubt]);
    } else if (buttonClicked === "check") {
      onCardResult(check);
      onSummaryImage([...summaryImage, check]);
    }

    onTitleClicked(false);
    onAnswersShowed(false);
    onCardSolved((oldValue: number) => {
      return oldValue + 1;
    });
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
