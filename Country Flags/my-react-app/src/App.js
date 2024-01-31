/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);
  const cardStyle = {
    width:"200px",
    border:"1px solid #ccc",
    // eslint-disable-next-line no-undef
    borderRadius:"10px",
    margin:"10px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  };
const imageStyle = {
  width:"100px",
  height:"100px",

};
const containerStyle = {
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems:"center",
  height:"100vh",

}
  return (
    <div style={containerStyle}>
      
      {countries.map((country, index) => (
        <div key={country.cca3} className="country-card" style={cardStyle}>
          <h2>{country.name.common}</h2>
          {country.flags && country.flags.png ? (
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`} style={imageStyle}
            />
          ) : (
            <p>No flag available</p>
          )}
        </div>
      ))}
    </div>
  );
}
