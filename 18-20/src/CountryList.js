import DetailedCountry from './DetailedCountry'
import { useState } from 'react'

const CountryList = ({countries}) => {
  const [show, setShow] = useState(null)

  const handleShowClick = (country) => {
    setShow(country)
  }

  if (show) {
    return <DetailedCountry country={show} />
  }

  else if (countries.length === 1) {
    return <DetailedCountry country={countries[0]} />
  }
  else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 0) {
    return (
      <div>
        {countries.map(country => (
          <>
            <p key={country.name}>{country.name}<button onClick={() => handleShowClick(country)}>Show</button></p>
          </>)
        )}
        </div>
    )
  } else {
    return null
  }
}

export default CountryList