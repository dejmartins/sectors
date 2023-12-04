import './App.css';
import { useEffect, useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { database } from './firebase';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    set(ref(database, '/users'), {
        message: "Hello firebase!",
        name: "Osaro"
      });

    const fetchData = async () => {
      const snapshot = await get(ref(database, '/users'));
      if (snapshot.exists()) {
        setData(snapshot.val());
        console.log(data)
        console.log(snapshot.val())
      } else {
        console.log('No data available');
      }
    };

    // fetchData();
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
