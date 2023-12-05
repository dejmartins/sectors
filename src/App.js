import Home from './pages/Home';
// import Option  from './layouts/SectorOptions';
import React, { useEffect } from 'react';

function App() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await get(ref(database, '/sectors'));
    //   if (result.exists()) {
    //     setData([result.val()]);
    //     console.log(data)
    //     console.log(result.val())
    //   } else {
    //     console.log('No data available');
    //   }
    // };

    // fetchData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {/* <Option /> */}
      </header>
    </div>
  );
}

export default App;
