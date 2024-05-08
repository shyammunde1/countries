import axios from "axios";
import { useEffect, useState } from "react";
import "./countries.css";

const Countries = () => {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCountries(response.data);
    } catch (error) {
      console.log("fetch the country data error:", error);
    }
  };
//   console.log(countries);

  useEffect(() => {
    fetchData();
  }, []);

  const Tile = ({flagUrl,name,altFlag}) => {
    return (
      <div className="card">
        <img src={flagUrl} alt={altFlag} style={{width:"100px",height:"100px"}} />
        <p>{name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {countries.map((country)=>
            <Tile key={country.flags.png} flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt} />
        )}
      </div>
    </>
  );
};

export default Countries;
