import styled from "styled-components";

export const FlashcardBackFaceContainer = styled.div`
  width: 299px;
  min-height: 131px;
  background: #ffffd5;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 15px 6px 15px;
  margin-bottom: 25px;

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 991px) {
    width: 567.12px;
    height: 91.74px;
  }
`;

export const FlashcardBackFaceAnswer = styled.p`
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  padding-bottom: 15px;
`;

export const FlashcardBackFaceButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 991px) {
    justify-content: space-around;
  }
`;

export const FlashcardButton = styled.button`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  font-family: "Recursive", cursive;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &.button-red {
    background: #ff3030;
  }

  &.button-orange {
    background: #ff922e;
  }

  &.button-green {
    background: #2fbe34;
  }
`;
