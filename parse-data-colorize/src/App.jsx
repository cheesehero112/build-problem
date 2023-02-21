/*
### parse data and colorize
1. Given a fake data of account numbers and money owed, make a table that looks like:
const data = {
1: -1234,
2: 23478,
3: 2,
4:555
}
```
AccountId: $<number>
AccountId: $<number>
AccountId: $<number>
```
2. If the number is below 0, it should be red
3. If the number if 0 or above, it should be green
// If 0, make it green 
*/
import './App.css';
import { Prices } from './Prices';

export function App() {
  return (
    <div className='App'>
      <ul className='list'>
        <Prices />
      </ul>
    </div>
  );
}

// const listItems = Object.keys(data).map((key) => {
//   return (
//     <li
//       style={data[key] > 0 ? { color: 'green' } : { color: 'red' }}
//       className='listItem'
//       key={key}
//     >{`${key}: $${data[key]}`}</li>
//   );
// });
