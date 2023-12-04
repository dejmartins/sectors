import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
// import { ref, get } from 'firebase/database';
// import { database } from './firebase';

function App() {
  // const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, selectedSectors, agreeToTerms });
    
    setName('');
    setSelectedSectors([]);
    setAgreeToTerms(false);
  };

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
        {/* <p className=''>Please enter your name and pick the Sectors you are currently involved in.</p>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor='name'>Name:</label>
            <input 
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="sectors">Sectors</label>
            <select 
              name='sectors' 
              multiple
              value={selectedSectors}
              onChange={(e) => setSelectedSectors(Array.from(e.target.selectedOptions, (option) => option.value))} >
              <option value='Manufacturing'>Manufacturing</option>
              <option value='Subsector1'>&nbsp; &nbsp; Manufacturing</option>
            </select>
          </div>

          <div className='flex'>
            <input 
              type='checkbox' 
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)} />
            <label>Agree to terms</label>
          </div>
          <button>Save</button>
        </form> */}
      </header>
    </div>
  );
}

export default App;
