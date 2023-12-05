import Header from "../layouts/Header"
import Button from "../components/Button";
import React, { useState } from 'react';
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

                    <div className="flex flex-col mb-3 w-80 w-full">
                        <label htmlFor="sectors">Sectors:</label>
                        <select 
                            name='sectors' 
                            multiple
                            value={selectedSectors}
                            onChange={(e) => setSelectedSectors(Array.from(e.target.selectedOptions, (option) => option.value))} 
                            className="input">
                        <option selected value='Manufacturing'>Manufacturing</option>
                        <option value='Subsector1'>&nbsp; &nbsp; Manufacturing</option>
                        </select>
                    </div>

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