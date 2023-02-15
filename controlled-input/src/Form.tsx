/*
### controlled input
Make a form with an input and a submit button

User should be able to fill in the input field

When the user clicks submit, the value of the input field should be logged

(bonus) change the text field font style to italics on button click

*/

import { useState } from 'react';

import './App.css';

function Form() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted! ', message);
    setShowMessage(true);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
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
      {showMessage ? <p>{message}</p> : null}
    </>
  );
}

export default Form;
