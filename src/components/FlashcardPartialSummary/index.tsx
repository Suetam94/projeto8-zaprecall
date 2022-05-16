import {
  FlashcardPartialSummaryContainer,
  FlashcardPartialSummaryContent,
  FlashcardPartialSummaryImage,
} from "./styles";
import { FlashcardSummary } from "../FlashcardSummary";

interface FlashcardPartialSummaryProps {
  concluded: number;
  summaryImage: Array<string>;
}

export function FlashcardPartialSummary({
  concluded,
  summaryImage,
}: FlashcardPartialSummaryProps) {
  if (concluded < 4) {
    return (
      <FlashcardPartialSummaryContainer>
        <FlashcardPartialSummaryContent>
          {concluded}/4 CONCLUÍDOS
        </FlashcardPartialSummaryContent>
        <div>
          {summaryImage
            ? summaryImage.map((image, index) => {
                return <FlashcardPartialSummaryImage key={index} src={image} />;
              })
            : ""}
        </div>
      </FlashcardPartialSummaryContainer>
    );
  } else {
    return <FlashcardSummary summaryImage={summaryImage} />;
  }
}
