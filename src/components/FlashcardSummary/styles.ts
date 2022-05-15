import styled from "styled-components";

export const FlashcardSummaryContainer = styled.div`
  width: 100%;
  height: 171px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 65px 10px 88px;
`;

export const FlashcardSummaryHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlashcardSummaryImage = styled.img`
  width: 23px;
  height: 23px;
`;

export const FlashcardSummaryTitle = styled.h3`
  font-family: "Recursive", cursive;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-left: 12px;
`;

export const FlashcardSummaryContent = styled.p`
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #333333;
`;

export const FlashcardSummaryStatus = styled.p`
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

export const FlashcardSummaryHitsContainer = styled.div`
  max-width: 107px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlashcardSummaryHits = styled.img`
  width: 23px;
  height: 23px;
`;
