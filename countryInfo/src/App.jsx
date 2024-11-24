import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const countriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    console.log(countriesURL)
    axios
      .get(countriesURL)
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const showHandle = (showCountry) => {
    setSearch(showCountry)
  }

  const filteredCountries = 
    [...countries].filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  console.log(filteredCountries)

  return (
    <div>
      <div>
      Find countries <input value = {search} onChange={handleSearchChange}/>
      </div>
      <Countries countries = {filteredCountries} showHandle={showHandle}/>
    </div>
  )
}

export default App
