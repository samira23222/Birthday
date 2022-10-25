import './App.scss';
import data from './data.js';
import List from './birthday.js';
import { useState } from 'react';


function Bday() {
 const [friends, setPeople] = useState(data)
   
    return (
        <div className="container">
            <h1>My friend's Birthdays!</h1>
            <div className="wrapper">
            <List friends={friends} />
            <button onClick={() => setPeople([])}>Clear all</button>
            </div>
        </div>
    
      
    );
  }
  export default Bday;