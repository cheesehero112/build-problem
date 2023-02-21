import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  top: 50%
  padding: 10px;
}

#root{
  margin: 10%;
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
  font-style: italic;
  color: red;
  margin-top: 10px;
`;

export const InputNormal = styled.input`
  font-style: normal;
  color: green;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  justify-content: center;
  border: 0.2px outset #24383b;
  margin: auto;
`;
export const Label = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
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
  margin: 10px auto;
`;
export const SubmitButton = styled.button`
  width: 100px;
  border-radius: 7px;
  background-color: lightgray;
  margin: 10px auto;
`;
