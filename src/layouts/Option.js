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

            // let parentSectors = sectorsArray.map(sectors => sectors.key)

            // parentSectors.forEach((sector) => {
            //     console.log(sector)
                
            //     for (let i = 0; i < sectorsData[sector].length; i++) {
            //         let sectorName = sectorsData[sector][i];
            //         if(typeof sectorName === "object"){
            //             console.log(sectorName.name)
            //         } else {
            //             console.log(sectorName);
            //         }
            //     }
            // })

            // const parentSectors = sectorsArray.map((sector) => sector.key);

            // parentSectors.forEach((sector) => {
            // console.log(sector);

            // sectorsData[sector].forEach((sectorData) => {
            //     if (typeof sectorData === "object") {
            //     console.log(sectorData.name);
            //     } else {
            //     console.log(sectorData);
            //     }
            // });
            // });

            console.log(sectorsData)
     
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
    // <div>
    //   <label htmlFor="sectors">Select Sectors:</label>
    //     <select name="sectors" multiple>
    //         {sectors.map((sector) => (
    //             <option key={sector.key} value={sector.key}>
    //             {typeof sector === "object" ? sector.name : sector}
    //             {/* {Array.isArray(sector.subCategories) &&
    //                 sector.subCategories.map((subCategory) => (
    //                 <option key={subCategory.key} value={subCategory.key}>
    //                     &nbsp; &nbsp; {typeof subCategory === "object" ? subCategory.name : subCategory}
    //                 </option>
    //                 ))} */}
    //             </option>
    //         ))}
    //     </select>
    // </div>

    <div>
        <label htmlFor="sectors">Select Sectors:</label>
        <select name="sectors" multiple>
        {parentSectors.map((sector) => (
            <optgroup key={sector} label={sector}>
            {sectorsData[sector].map((sectorData) => (
                <option key={sectorData.key} value={sectorData.key}>
                {typeof sectorData === "object" ? sectorData.name : sectorData}
                {/* {Array.isArray(sectorData.subCategories) &&
                    sectorData.subCategories.map((subCategory) => (
                    <option key={subCategory.key} value={subCategory.key}>
                        &nbsp; &nbsp; {typeof subCategory === "object" ? subCategory.name : subCategory}
                    </option>
                    ))} */}
                </option>
            ))}
            </optgroup>
        ))}
        </select>
  </div>
  );
}

export default Option;
