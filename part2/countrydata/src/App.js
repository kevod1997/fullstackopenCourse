import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

function App() {
  const [countries, setCountries] = useState([])
  const [findCountry, setFindCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);


      useEffect(() => {
        axios
          .get('https://restcountries.com/v2/all').then(response => {
            setCountries(response.data)
          })
      }, [])

      useEffect(() => {
        const filtered = countries.filter(country =>
          country.name.toLowerCase().includes(findCountry.toLowerCase())
        );
        setFilteredCountries(filtered);
      }, [countries, findCountry]);

      useEffect(() => {
        setSelectedCountry(null);
    }, [findCountry]);

      

      const handleFindCountry = (e) => {
        setFindCountry(e.target.value);
      };

      console.log(filteredCountries);
      console.log(selectedCountry);


  return (
    <>
      <div>
        filter shown with <input value={findCountry} onChange={handleFindCountry}/>
    </div>
    <div>
      {filteredCountries.length >= 10 ? (<p>Too many matches, specify another filter</p>) : 
      ( filteredCountries.length === 1 ? (
        <Country filteredCountries={filteredCountries} />
      ) : (
        filteredCountries.map((country) => (
          <p key={country.name}>
              {country.name} <button onClick={() => setSelectedCountry(country)}>show</button>
          </p>
        ))
        )
    )}
     {selectedCountry && <Country country={selectedCountry} />}
    </div>
    </>
  );
}

export default App;
