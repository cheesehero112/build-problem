import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  top: 50%
  padding: 10px;
}

#root{
  margin: auto;
  justify-content: space-around;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  background-color: white;
  color: black;

}
`;

export const InputItalics = styled.input`
  color: red;
  border-radius: 7px;
  font-style: italic;
  font-size: 16px;
  padding: 5px;
`;

export const InputNormal = styled.input`
  color: green;
  border-radius: 7px;
  font-style: normal;
  font-size: 16px;
  padding: 5px;
`;

export const Container = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  justify-content: center;
  border: 0.2px outset #24383b;
  border-radius: 7px;
  margin: auto;
`;
export const MsgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px;
`;
export const Label = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px auto;
  padding: auto 10px;
`;
export const P = styled.p`
  padding: 5px;
  flex-direction: row;
`;
export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
export const SubmitButton = styled.button`
  width: 100px;
  border-radius: 7px;
  background-color: lightgray;
  margin: 10px auto;
`;
