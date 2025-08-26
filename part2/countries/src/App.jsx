import { useEffect, useState } from 'react'
import countryService from './services/countries'

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryNames, setCountryNames] = useState([])
  const [isCountrySelected, setIsCountrySelected] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})

  const filteredCountries = countryNames.filter((name) => {
    return name.toLowerCase().includes(countryFilter.toLowerCase())
  })

  function getCountryDisplay() { 
    // When filter string is empty   
    if (countryFilter === '') {
      return(<p>Start your search.</p>)
    }
    // Display the country details if there's an exact match
    else if (countryNames.includes(countryFilter)) {
      countryService
        .getCountryDetails(countryFilter)
        .then((response) => {
          console.log(response.data.name.common)
          setIsCountrySelected(true)
          setSelectedCountry(response.data)
        })
    }
    else if (filteredCountries.length === 1) {
      countryService
        .getCountryDetails(filteredCountries[0])
        .then((response) => {
          console.log(response.data.name.common)
          setIsCountrySelected(true)
          setSelectedCountry(response.data)
        })
    }
    // Message if there are too many results 
    else if (filteredCountries.length > 10) {
      return (<p>Too many matches. Refine your search.</p>)
    } 
    // Display the list of filtered countries, if still > 1
    else if (filteredCountries.length > 1){
      return (filteredCountries.map(name => <p key={name}>{name}</p>))
    }
    // Message if there are no matches
    else {
      return (<p>No matches. Try another search.</p>)
    }
  }

  function getDataHook() {
    countryService
      .getAllCountries()
      .then((response) => {
        setCountryNames(response.data.map((country) => country.name.common))
      })
  }

  function handleSetCountryFilter(event) {
    setCountryFilter(event.target.value)
  }

  useEffect(getDataHook, [])

  return (
    <>
      <div className='m-2'>
        find countries: 
        <input 
          className='mx-2'
          id='countryFilter'
          onChange={(e) => {
            handleSetCountryFilter(e)
          }}
          value={countryFilter}/>
      </div>
      <div className='m-2'>
      {getCountryDisplay()}
      </div>
    </>
  )
}

export default App
