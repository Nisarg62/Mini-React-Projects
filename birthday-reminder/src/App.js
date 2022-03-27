import './App.css';
import List from './components/List';
import { useState } from 'react';
import data from './components/Data';

function App() {
  const [people, setPeople] = useState(data)
  //contributer Shivang
  return (
    <div className="App">
      <div className='container'>
        <h3>{people.length} birthdays today</h3>
        <div style={{ height: 'auto', maxHeight: '85%' }} >
          <List people={people}/>
        </div>
        <button onClick={() => setPeople([])}>Clear all</button>
      </div>
    </div>
  );
}

export default App;
