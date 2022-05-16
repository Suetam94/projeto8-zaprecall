import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const FormHome = styled.form`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 246px;
    height: 43px;
    background: #ffffff;
    border-radius: 5px;
    border: 0;
    outline: none;
    padding: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  input::placeholder {
    color: #adadad;
  }

  select {
    width: 246px;
    height: 43px;
    background: #ffffff;
    border-radius: 5px;
    color: #adadad;
    margin-top: 18px;
    padding: 10px;

    option {
      color: #000;

      :first-child {
        color: #adadad;
      }
    }
  }

  @media (min-width: 991px) {
    input, select {
      width: 567.12px;
    }
  }
`;
