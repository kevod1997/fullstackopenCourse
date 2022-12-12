import React from 'react'

function Country({filteredCountries, country}) {
  return (

    <div>
                    {country ? (
                <>
                    <div key={country.name}>
                       <h1> {country.name} </h1>
                       <p>capital {country.capital} </p>
                       <p>population {country.population} </p>
                       <h3> languages </h3>
                       <ul>
                      {country.languages.map((language) => (
                          <li key={language.name}>{language.name}</li>
                      ))}
                  </ul>
                  <img src={country.flags.png} alt={'Flag of' + country.name} />
                    </div>
                </>
            ) : (
                filteredCountries.map((country) => (
                    <div key={country.name}>
                       <h1> {country.name} </h1>
                       <p>capital {country.capital} </p>
                       <p>population {country.population} </p>
                       <h3> languages </h3>
                       <ul>
                      {country.languages.map((language) => (
                          <li key={language.name}>{language.name}</li>
                      ))}
                  </ul>
                  <img src={country.flags.png} alt={'Flag of' + country.name} />
                    </div>
                  ))
            )}

    </div>
  )
}

export default Country