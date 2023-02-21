/*
### controlled input
Make a form with an input and a submit button

User should be able to fill in the input field

When the user clicks submit, the value of the input field should be logged

(bonus) change the text field font style to italics on button click

*/

import { useState } from 'react';
import { P, Label, InputItalics, InputNormal, Container, FormContainer, SubmitButton } from './styles/styles';
// import styled from 'styled-components';

// import './App.css';

const Form = () => {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [italicsFont, setItalicsFont] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    console.log('button clicked');
    setDisplayMessage(`form submitted!: ${message}`);
  };

  const handleItalics = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItalicsFont(!italicsFont);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      {/* <Container> */}
      <FormContainer onSubmit={handleSubmit}>
        <Label>
          <P>Write a message:</P>
          {italicsFont ? (
            <InputItalics
              value={message}
              onChange={handleChange}
              type='text'
              name='message'
            />
          ) : (
            <InputNormal
              value={message}
              onChange={handleChange}
              type='text'
              name='message'
            />
          )}
        </Label>
        <br />
        <Label>
          <input
            type='checkbox'
            checked={italicsFont}
            onChange={handleItalics}
          ></input>
          <P>I like Italics!</P>
        </Label>
        <SubmitButton>Submit</SubmitButton>
      </FormContainer>
      {italicsFont ? (
        <p>
          <i>{displayMessage}</i>
        </p>
      ) : (
        <p>{displayMessage}</p>
      )}
      {/* </Container> */}
    </>
  );
};

export default Form;
