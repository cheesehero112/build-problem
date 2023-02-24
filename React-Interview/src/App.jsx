import './App.css';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  // write handleSubmit func
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setMessages([...messages, input]);
  };
  // handle input
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleDelete = (index) => {
    const filteredMessages = messages.filter((msg, i) => i !== index);
    setMessages(filteredMessages);
    console.log('delete');
  };

  return (
    <div className='notes'>
      <form onSubmit={handleSubmit}>
        <label>Type your message: </label>
        <input
          value={input}
          type='text'
          onChange={handleInput}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {showMessage ? (
          messages.map((msg, index) => (
            <div>
              <p key={index}>{msg}</p>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>please type message</p>
        )}
      </div>
    </div>
  );
}

export default App;
