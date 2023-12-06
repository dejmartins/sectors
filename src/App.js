import Home from './pages/Home';
import React, { useEffect } from 'react';
// import { database } from './firebase';
// import { ref, get } from "firebase/database";

function App() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await get(ref(database, '/'));

  //     if (result.exists()) {
  //       const jsonData = JSON.stringify(result.val(), null, 2);

  //       const blob = new Blob([jsonData], { type: 'application/json' });

  //       const link = document.createElement('a');
  //       link.href = URL.createObjectURL(blob);
  //       link.download = 'database-export.json';
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);

  //     } else {
  //       console.log('No data available');
  //     }
  //   };

  //   fetchData();
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
