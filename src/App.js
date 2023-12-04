import './App.css';
import { useEffect, useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { database } from './firebase';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    set(ref(database, '/users'), {
        name: "Osaro"
      });

    set(ref(database, '/sectors'), {
        manufacturing: {
          0: "Construction Materials",
          1: "Electronics and Optics",
          2: "Food and Beverage",
          3: "Furniture",
          4: "Machinery",
          5: "Metalworking",
          6: "Plastic and Rubber",
          7: "Printing",
          8: "Textile and Clothing",
          9: "Wood"
        },

        other: {
          0: "Creative Industries",
          1: "Energy Technology",
          2: "Environment"
        },

        service: {
          0: "Business Services",
          1: "Engineering",
          2: "Information Technology and Telecommunications",
          3: "Tourism",
          4: "Translation Services",
          5: "Transport and Logistics"
        }
      });

      set(ref(database, '/sectors/manufacturing/2'), {
        name: "Food and Beverage",
        subCategories: {
          0: "Bakery & Confectionery Products",
          1: "Beverages",
          2: "Fish & Fish Products",
          3: "Meat & Meat Products",
          4: "Milk & Diary Products",
          5: "Other",
          6: "Sweets & Snack Food"
        }
      });

      set(ref(database, '/sectors/manufacturing/3'), {
        name: "Furniture",
        subCategories: {
          0: "Bathroom/Sauna",
          1: "Bedroom",
          2: "Children's Room",
          3: "Kitchen",
          4: "Living Room",
          5: "Office",
          6: "Other(Furniture)",
          7: "Other",
          8: "Outdoor",
          9: "Project Furniture"
        }
      });

      set(ref(database, '/sectors/manufacturing/4'), {
        name: "Machinery",
        subCategories: {
          0: "Machinery Components",
          1: "Machinery Equipment/Tools",
          2: "Manufacture of Machinery",
          3: "Maritime",
          4: "Metal Structures",
          5: "Other",
          6: "Repair and Maintenance Service"
        }
      });

      set(ref(database, '/sectors/manufacturing/4/subCategories/3'), {
        name: "Maritime",
        subCategories: {
          0: "Aluminium and Steel Workboats",
          1: "Boat/Yacht Building",
          2: "Ship Repair and Conversion"
        }
      });

      set(ref(database, '/sectors/manufacturing/5'), {
        name: "Metalworking",
        subCategories: {
          0: "Construction of Metal Structures",
          1: "Houses and Buildings",
          2: "Metal Products",
          3: "Metal Works"
        }
      });

      set(ref(database, '/sectors/manufacturing/5/subCategories/3'), {
        name: "Metal Works",
        subCategories: {
          0: "CNC-Machining",
          1: "Forgings, Fastening",
          2: "Gas, Plasma, Laser Cutting",
          3: "MIG, TIG, Aluminum Welding"
        }
      });

      set(ref(database, '/sectors/manufacturing/6'), {
        name: "Plastic and Rubber",
        subCategories: {
          0: "Packaging",
          1: "Plastic Goods",
          2: "Plastic Processing Technology",
          3: "Plastic Profiles"
        }
      });

      set(ref(database, '/sectors/manufacturing/6/subCategories/2'), {
        name: "Plastic Processing Technology",
        subCategories: {
          0: "Blowing",
          1: "Moulding",
          2: "Plastics Welding and Processing"
        }
      });

      set(ref(database, '/sectors/manufacturing/7'), {
        name: "Printing",
        subCategories: {
          0: "Advertising",
          1: "Book/Periodicals Printing",
          2: "Labelling and Packaging Printing"
        }
      });

      set(ref(database, '/sectors/manufacturing/8'), {
        name: "Textile and Clothing",
        subCategories: {
          0: "Clothing",
          1: "Textile"
        }
      });

      set(ref(database, '/sectors/manufacturing/9'), {
        name: "Wood",
        subCategories: {
          0: "Other (Wood)",
          1: "Wooden Building Materials",
          2: "Wooden Houses"
        }
      });

      set(ref(database, '/sectors/service/2'), {
        name: "Information Technology and Telecommunications",
        subCategories: {
          0: "Data Processing, Web Portals, E-marketing",
          1: "Programming, Consultancy",
          2: "Software, Hardware",
          3: "Telecommunications"
        }
      });

      set(ref(database, '/sectors/service/5'), {
        name: "Transport and Logistics",
        subCategories: {
          0: "Air",
          1: "Rail",
          2: "Road",
          3: "Water"
        }
      });

    const fetchData = async () => {
      const snapshot = await get(ref(database, '/sectors'));
      if (snapshot.exists()) {
        setData(snapshot.val());
        console.log(data)
        console.log(snapshot.val())
      } else {
        console.log('No data available');
      }
    };

    fetchData();
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
