import { useState, useMemo } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  // expensiveCalculation will only run if count changes.
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((t) => [...t, todoText]);
    setTodoText('');
  };
  const handleChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  return (
    <div className='App'>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <form onClick={addTodo}>
          <label>
            Write Todo:
            <input
              type='text'
              value={todoText}
              onChange={handleChange}
            ></input>
          </label>
          <button>Add Todo</button>
        </form>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default App;
