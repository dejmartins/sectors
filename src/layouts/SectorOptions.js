import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import "../styles/Home.css"

function SectorOptions() {
  const [sectors, setSectors] = useState([]);
  const [sectorsData, setSectorsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectorsRef = ref(database, '/sectors');
        const sectorsSnapshot = await get(sectorsRef);

        if (sectorsSnapshot.exists()) {

            const sectorsData = sectorsSnapshot.val();
            setSectorsData(sectorsData);
            const sectorsArray = Object.entries(sectorsData).map(([key, value]) => ({ key, ...value }));

            setSectors(sectorsArray);
     
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  
  const parentSectors = sectors.map((sector) => sector.key);

  return (
    <div className="flex flex-col mb-3 w-80 w-full">
    <label htmlFor="sectors">Sectors:</label>
    <select className='input' name="sectors" multiple>
        {parentSectors.map((sector) => (
        <optgroup key={sector} label={sector[0].toUpperCase() + sector.slice(1)}>
            {sectorsData[sector].map((sectorData) => (
            <React.Fragment key={sectorData.key}>
                <option value={sectorData.key}>
                {typeof sectorData === "object" ? sectorData.name : sectorData}
                </option>
                {Array.isArray(sectorData.subCategories) &&
                sectorData.subCategories.map((subCategory) => (
                    <React.Fragment key={subCategory.key}>
                    <option value={subCategory.key}>
                        &nbsp; &nbsp; {typeof subCategory === "object" ? subCategory.name : subCategory}
                    </option>
                    {Array.isArray(subCategory.subCategories) &&
                        subCategory.subCategories.map((innerSubCategory) => (
                        <option key={innerSubCategory.key} value={innerSubCategory.key}>
                            &nbsp; &nbsp; &nbsp; &nbsp; {typeof innerSubCategory === "object" ? innerSubCategory.name : innerSubCategory}
                        </option>
                        ))}
                    </React.Fragment>
                ))}
            </React.Fragment>
            ))}
        </optgroup>
        ))}
    </select>
    </div>

  );
}

export default SectorOptions;
