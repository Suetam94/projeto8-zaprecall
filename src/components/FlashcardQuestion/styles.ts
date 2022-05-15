import styled from "styled-components";

export const FlashcardQuestionContainer = styled.div`
  width: 299px;
  height: 131px;
  background: #ffffd5;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 18px 15px 6px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlashcardQuestionTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FlashcardQuestionText = styled.p`
  font-family: "Recursive", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

export const FlashcardQuestionImageDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const FlashcardQuestionImage = styled.img`
  width: 30px;
  height: 20px;
`;