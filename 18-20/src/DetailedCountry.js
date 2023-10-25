import { useState, useEffect } from "react"
import axios from "axios"

const DetailedCountry = ({ country }) => {
  const [weather, setWeather] = useState(null)
  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.cordinates[0]}&lon=${country.cordinates[1]}&appid=${api_key}&units=metric`)
    .then(response => {
      console.log(response.data)
      setWeather(response.data)
    })
    .catch(error => { console.log(error) })
  }, [])

  console.log(country)
  const languages = country.languages
  const languageNames = Object.values(languages)
  const flagUrl = Object.values(country.flag)[0]

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
        {languageNames.map(language => <p key={language}>{language}</p>)}
      <div>
        <img src={flagUrl} alt="flag" />
      </div>
      <h1>Weather in {country.capital[0]}</h1>
      <p>temperature: {weather ? weather.main.temp : null} Celsius</p>
      <img src={`http://openweathermap.org/img/w/${weather ? weather.weather[0].icon : null}.png`} alt="weather icon" />
      <p>wind: {weather ? weather.wind.speed : null} m/s</p>
    </>

  )
}

export default DetailedCountry