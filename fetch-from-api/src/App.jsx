/*
### fetch from api
make a GET request to this endpoint
<https://jsonplaceholder.typicode.com/users>

which returns a json2. based on the return data, parse only the name and email and display as a list like:
Arthur Adams -
arthur@gmail.com
Beth Bryant -
bethB@gmail.com
*/

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch(api)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className='App'>
      {data.map((user) => (
        <p key={user.email}>{`${user.name} - ${user.email}`}</p>
      ))}
    </div>
  );
}

export default App;
