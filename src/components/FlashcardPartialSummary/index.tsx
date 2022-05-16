import {
  FlashcardPartialSummaryContainer,
  FlashcardPartialSummaryContent,
} from "./styles";

interface FlashcardPartialSummaryProps {
  concluded: number;
}

export function FlashcardPartialSummary({
  concluded,
}: FlashcardPartialSummaryProps) {
  return (
    <FlashcardPartialSummaryContainer>
      <FlashcardPartialSummaryContent>
        {concluded}/4 CONCLUÍDOS
      </FlashcardPartialSummaryContent>
    </FlashcardPartialSummaryContainer>
  );
}
