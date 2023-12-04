import './App.css';
import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from './firebase';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await get(ref(database, '/sectors'));
      if (result.exists()) {
        setData([result.val()]);
        console.log(data)
        console.log(result.val())
      } else {
        console.log('No data available');
      }
    };

    fetchData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <p>I'm here</p>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
