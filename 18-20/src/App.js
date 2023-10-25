import { useState, useEffect } from 'react'
import CountryList from './CountryList'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getCountries()
  }, [])

  const handleFiltering = (string) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(string.toLowerCase()))
    setCountriesToShow(filteredCountries)
  }

    
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    handleFiltering(event.target.value)
  }

  const getCountries = () => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      const countryList = response.data.map(country => ({
        name: country.name.common,
        languages: country.languages,
        capital: country.capital,
        area: country.area,
        flag: country.flags,
        cordinates: country.capitalInfo.latlng
      }))
      setCountries(countryList)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      find countries:
      <input value={filter} onChange={handleFilterChange} />
      <CountryList countries={countriesToShow} />
    </div>
  )

}

export default App