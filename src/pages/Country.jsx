import React from 'react'
import { useContext } from 'react'
import { CurrentCountry } from '../App'

const Country = () => {
  const [currentCountry, setCurrentCountry] = useContext(CurrentCountry)
  setCurrentCountry(data.name.common)

  return (
    <div>{currentCountry}</div>
  )
}

export default Country