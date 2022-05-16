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
}

export function FlashcardSummary({
  summaryImage,
  onRecallInit,
}: FlashcardSummaryProps) {
  const unsuccess = summaryImage.filter((image) => image.includes("error"));
  console.log(unsuccess);
  return (
    <FlashcardSummaryContainer>
      <FlashcardSummaryHeader>
        {unsuccess.length !== 0 ? (
          <FlashcardSummaryImage src={sad} alt={"Putz"} />
        ) : (
          <FlashcardSummaryImage src={party} alt={"Parabéns"} />
        )}
        {unsuccess.length !== 0 ? (
          <FlashcardSummaryTitle>Putz...</FlashcardSummaryTitle>
        ) : (
          <FlashcardSummaryTitle>Parabéns</FlashcardSummaryTitle>
        )}
      </FlashcardSummaryHeader>
      <FlashcardSummaryContent>
        {unsuccess.length !== 0 ? (
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
