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
`;
