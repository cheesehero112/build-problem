/*
### controlled input
Make a form with an input and a submit button

User should be able to fill in the input field

When the user clicks submit, the value of the input field should be logged

(bonus) change the text field font style to italics on button click

*/

import { useState } from 'react';

import './App.css';

const Form = () => {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [italicsFont, setItalicsFont] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted! ', message);
    setShowMessage(true);
    setItalicsFont(!italicsFont);
    setMessage('');
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Write a message:
          <input
            value={message}
            onChange={handleChange}
            type='text'
            name='message'
          ></input>
        </label>
        <button>Submit</button>
      </form>
      {showMessage && italicsFont ? (
        <p>
          <i>{message}</i>
        </p>
      ) : (
        <p>{message}</p>
      )}
    </>
  );
};

export default Form;
