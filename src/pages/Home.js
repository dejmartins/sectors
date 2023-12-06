import Header from "../layouts/Header"
import Button from "../components/Button";
import React, { useState } from 'react';
import SectorOptions from "../layouts/SectorOptions";
import "../styles/Home.css"

export default function Home() {
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

    const handleSelectedSectorsChange = (selectedSectorKeys) => {
        setSelectedSectors(selectedSectorKeys);
    };

    return (
       <>
        <div className=".home-container">
            <Header />
            <div className="form-container mt-10">
                <p>Fill In:</p>
                <p>Please enter your name and pick the sectors you are currently involved in.</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-3 w-full'>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            name='name'
                            placeholder="Asabe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input" />
                    </div>

                    <SectorOptions onSelectedSectorsChange={handleSelectedSectorsChange} selectedSectors={selectedSectors}/>

                    <div className='flex mb-2'>
                        <input 
                            type='checkbox' 
                            checked={agreeToTerms}
                            onChange={() => setAgreeToTerms(!agreeToTerms)}
                            className="mr-2" />
                        <label>Agree to terms</label>
                    </div>
                    <Button text={"Save"} />
                </form>
            </div>
        </div>
       </>
    )
}