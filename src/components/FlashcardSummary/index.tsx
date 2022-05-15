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
import check from "../../assets/img/check.svg";
import doubt from "../../assets/img/doubt.svg";
import error from "../../assets/img/error.svg";

export function FlashcardSummary() {
  return (
    <FlashcardSummaryContainer>
      <FlashcardSummaryHeader>
        <FlashcardSummaryImage src={party} alt={"Parabéns"} />
        <FlashcardSummaryTitle>Parabéns</FlashcardSummaryTitle>
      </FlashcardSummaryHeader>
      <FlashcardSummaryContent>
        Você não esqueceu de nenhum flashcard!
      </FlashcardSummaryContent>
      <FlashcardSummaryStatus>4/4 CONCLUÍDOS</FlashcardSummaryStatus>
      <FlashcardSummaryHitsContainer>
        <FlashcardSummaryHits src={doubt} />
        <FlashcardSummaryHits src={check} />
        <FlashcardSummaryHits src={check} />
        <FlashcardSummaryHits src={check} />
      </FlashcardSummaryHitsContainer>
    </FlashcardSummaryContainer>
  );
}
