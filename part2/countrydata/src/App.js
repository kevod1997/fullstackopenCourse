import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(findCountry.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, findCountry]);

  useEffect(() => {
    setSelectedCountry(null);
  }, [findCountry]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (selectedCountry) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${selectedCountry.capital}`
        )
        .then((response) => {
          setWeather(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCountry]);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (filteredCountries.length === 1) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${filteredCountries.capital}`
        )
        .then((response) => {
          setWeather(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [filteredCountries]);

  const handleFindCountry = (e) => {
    setFindCountry(e.target.value);
    setWeather(null);
  };

  return (
    <>
      <div>
        filter shown with{" "}
        <input value={findCountry} onChange={handleFindCountry} />
      </div>
      <div>
        {filteredCountries.length >= 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          <Country filteredCountries={filteredCountries} />
        ) : (
          filteredCountries.map((country) => (
            <p key={country.name}>
              {country.name}{" "}
              <button onClick={() => setSelectedCountry(country)}>show</button>
            </p>
          ))
        )}
        {selectedCountry && <Country country={selectedCountry} />}
        {weather && (
          <>
          <p> temperature:{weather.current.temperature} Celcius </p>
          <img src={weather.current.weather_icons} alt="weather icon" />
          <p>wind speed {weather.current.wind_speed} mph direction {weather.current.wind_dir} </p>

          </>
)}

      </div>
    </>
  );
}

export default App;
