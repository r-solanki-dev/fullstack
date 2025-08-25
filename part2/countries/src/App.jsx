import { useEffect, useState } from 'react'
import countryService from './services/countries'

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryNames, setCountryNames] = useState([])

  const filteredCountries = countryNames.filter((name) => {
    return name.toLowerCase().includes(countryFilter.toLowerCase())
  })

  function getDataHook() {
    countryService
      .getAllCountries()
      .then((response) => {
        setCountryNames(response.data.map((country) => country.name.common))
      })
  }

  function handleSetCountryFilter(event) {
    setCountryFilter(event.target.value)
    console.log(filteredCountries)
  }

  useEffect(getDataHook, [])

  return (
    <>
      <div className='m-2'>
        find countries: 
        <input 
          id='countryFilter'
          onChange={handleSetCountryFilter}
          value={countryFilter}/>
      </div>
    </>
  )
}

export default App
