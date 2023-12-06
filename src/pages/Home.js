import Header from "../layouts/Header"
import Button from "../components/Button";
import React, { useState, useEffect } from 'react';
import SectorOptions from "../layouts/SectorOptions";
import { database } from "../firebase";
import { set, ref } from "firebase/database";
import "../styles/Home.css"

export default function Home() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [selectedSectors, setSelectedSectors] = useState([]);
    const [selectedSectorsError, setSelectedSectorsError] = useState([]);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [agreeToTermsError, setAgreeToTermsError] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        validateInputs();
    }, [name, selectedSectors, agreeToTerms]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        setHasSubmitted(true)
        validateInputs();

        if(isAllValidated()){
            let userDetailsRequest = createRequest();
            await sendUserData(userDetailsRequest);
            clearField();
        }
    };

    const sendUserData = async (userDetailsRequest) => {
        set(ref(database, `/users/${userDetailsRequest.name}`), userDetailsRequest);
    }

    const handleSelectedSectorsChange = (selectedSectorKeys) => {
        setSelectedSectors(selectedSectorKeys);
    };

    const validateInputs = () => {
        setNameError(name === '');
        setSelectedSectorsError(selectedSectors.length === 0);
        setAgreeToTermsError(agreeToTerms === false);
    }

    const isAllValidated = () => {
        return !nameError && !selectedSectorsError && !agreeToTermsError;
    }

    const clearField = () => {
        setName('');
        setSelectedSectors([]);
        setAgreeToTerms(false);
        setHasSubmitted(false);
        setNameError('')
        setSelectedSectorsError([]);
        setAgreeToTermsError(false);

    }

    const createRequest = () => {
        let sectors = {};

        selectedSectors.forEach((sector, index) => {
            sectors[`${index}`] = sector
        })

        return {
            name: name,
            sectors,
            agreeToTerms: agreeToTerms
        }
    }

    return (
       <>
        <div className=".home-container">
            <Header />
            <div className="form-container mt-10">
                <p>Fill In:</p>
                <p>Please enter your name and pick the sectors you are currently involved in.</p>
                <form onSubmit={handleSubmit}>
                    <div className={`flex flex-col my-3 w-full ${hasSubmitted && nameError ? 'error' : ''}`}>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            name='name'
                            placeholder="Asabe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input" />
                    </div>

                    <SectorOptions 
                        onSelectedSectorsChange={handleSelectedSectorsChange} 
                        selectedSectors={selectedSectors}
                        hasSubmitted={hasSubmitted}/>

                    <div className={`flex mb-2 items-center ${agreeToTermsError ? 'error' : ''}`}>
                        <input 
                            type='checkbox' 
                            checked={agreeToTerms}
                            onChange={() => setAgreeToTerms(!agreeToTerms)}
                            className="mr-2" />
                        <label>Agree to terms</label>
                        {agreeToTermsError && hasSubmitted && <span className="text-red-500 ml-2 text-[10px]">*Required</span>}
                    </div>
                    <Button text={"Save"} />
                </form>
            </div>
        </div>
       </>
    )
}