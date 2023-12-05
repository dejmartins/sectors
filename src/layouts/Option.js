import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';

function Option() {
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

            // const parentSectors = sectorsArray.map((sector) => sector.key);

            // parentSectors.forEach((sector) => {
            // console.log(sector);

            // sectorsData[sector].forEach((sectorData) => {
            //     if (typeof sectorData === "object") {
            //     console.log("--", sectorData.name);

            //     sectorData.subCategories.forEach((sector) => {
            //         if(typeof sector === "object"){
            //             console.log("----", sector.name)

            //             sector.subCategories.forEach((sec) => {
            //                 if(typeof sec === "object"){
            //                     console.log("------", sec.name)
            //                 } else {
            //                     console.log("------", sec)
            //                 }
            //             })
            //         } else {
            //             console.log("----", sector)
            //         }
            //     })

            //     } else {
            //     console.log("--", sectorData);
            //     }
            // });
            // });
     
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

    <div className='mt-10'>
      <label htmlFor="sectors">Select Sectors:</label>
      <select name="sectors" multiple>
        {parentSectors.map((sector) => (
          <optgroup key={sector} label={sector[0].toUpperCase() + sector.slice(1)}>
            {sectorsData[sector].map((sectorData) => (
              <React.Fragment key={sectorData.key}>
                <option value={sectorData.key}>
                  {typeof sectorData === "object" ? sectorData.name : sectorData}
                </option>
                {Array.isArray(sectorData.subCategories) &&
                  sectorData.subCategories.map((subCategory) => (
                    <option key={subCategory.key} value={subCategory.key}>
                      &nbsp; &nbsp; {typeof subCategory === "object" ? subCategory.name : subCategory}
                    </option>
                  ))}
              </React.Fragment>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default Option;
