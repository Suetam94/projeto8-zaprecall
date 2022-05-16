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
  console.log(concluded);
  return (
    <FlashcardPartialSummaryContainer>
      <FlashcardPartialSummaryContent>
        {concluded}/4 CONCLUÍDOS
      </FlashcardPartialSummaryContent>
    </FlashcardPartialSummaryContainer>
  );
}
