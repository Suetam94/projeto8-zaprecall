import styled from "styled-components";

export const FlashcardTitleContainer = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  margin-bottom: 25px;

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 991px) {
    width: 567.12px;
    height: 91.74px;
  }
`;

export const FlashcardTitleText = styled.span`
  font-family: "Recursive", cursive;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;

  @media (min-width: 991px) {
   font-size: 24px;
  }
`;

export const FlashCardTitleImage = styled.img`
  width: 20px;
  height: 23px;
`;
