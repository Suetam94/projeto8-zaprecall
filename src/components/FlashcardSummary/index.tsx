import {
  FlashcardSummaryContainer,
  FlashcardSummaryContent,
  FlashcardSummaryHeader,
  FlashcardSummaryHits,
  FlashcardSummaryHitsContainer,
  FlashcardSummaryImage,
  FlashcardSummaryStatus,
  FlashcardSummaryTitle,
} from "./styles";

import party from "../../assets/img/party.png";
import sad from "../../assets/img/sad.png";
import error from "../../assets/img/error.svg";
import { RestartButton } from "../RestartButton";

interface FlashcardSummaryProps {
  summaryImage: Array<string>;
  onRecallInit: (init: boolean) => void;
  flashcardGoal: number;
}

export function FlashcardSummary({
  summaryImage,
  onRecallInit,
  flashcardGoal,
}: FlashcardSummaryProps) {
  const errors = summaryImage.filter((image) => image.includes("error"));
  const asserts = summaryImage.filter((image) => image.includes("check"));

  if (flashcardGoal > 4) {
    flashcardGoal = 4;
  }
  if (flashcardGoal < 1) {
    flashcardGoal = 1;
  }

  const success = errors.length === 0 || asserts.length >= flashcardGoal;

  return (
    <FlashcardSummaryContainer>
      <FlashcardSummaryHeader>
        {!success ? (
          <FlashcardSummaryImage src={sad} alt={"Putz"} />
        ) : (
          <FlashcardSummaryImage src={party} alt={"Parabéns"} />
        )}
        {!success ? (
          <FlashcardSummaryTitle>Putz...</FlashcardSummaryTitle>
        ) : (
          <FlashcardSummaryTitle>Parabéns</FlashcardSummaryTitle>
        )}
      </FlashcardSummaryHeader>
      <FlashcardSummaryContent>
        {!success ? (
          <FlashcardSummaryContent>
            Ainda faltam alguns... Mas não desanime!
          </FlashcardSummaryContent>
        ) : (
          <FlashcardSummaryContent>
            Você não esqueceu de nenhum flashcard!
          </FlashcardSummaryContent>
        )}
      </FlashcardSummaryContent>
      <FlashcardSummaryStatus>4/4 CONCLUÍDOS</FlashcardSummaryStatus>
      <FlashcardSummaryHitsContainer>
        {summaryImage.map((image) => {
          return <FlashcardSummaryHits src={image} />;
        })}
      </FlashcardSummaryHitsContainer>
      <RestartButton onRecallInit={onRecallInit} />
    </FlashcardSummaryContainer>
  );
}
