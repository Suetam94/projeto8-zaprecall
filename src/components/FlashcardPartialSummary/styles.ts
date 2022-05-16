import styled from "styled-components";

export const FlashcardPartialSummaryContainer = styled.div`
  width: 375px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const FlashcardPartialSummaryContent = styled.p`
  height: 22px;
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

export const FlashcardPartialSummaryImage = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 5px;
  margin-top: 6px;
  :last-child {
    margin-right: 0;
  }
`;
