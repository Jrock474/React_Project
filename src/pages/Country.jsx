import React, { useEffect } from 'react'
import { CountryData } from '../App'
import { useContext,useState } from 'react'

const Country = () => {

  const[countryFlag, setCountryFlag] = useState([])
  const [countryName, setCountryName] = useState([])
  const [countryCapital, setCountryCapital] = useState([])
  const [countryTimeZones, setCountryTimeZones] = useState([])
  const [countryContinents, setCountryContinents] = useState([])
  const [countryPopulation, setCountryPopulation] = useState([])

  let data = useContext(CountryData)

  useEffect(()=>{
    console.log(data)
    setCountryFlag(data[0].flags.svg)
    setCountryName(data[0].name.common)
    setCountryCapital(data[0].capital[0])
    setCountryTimeZones(data[0].timezones[0])
    setCountryContinents(data[0].continents[0])
    setCountryPopulation(data[0].population)
  },[])




  return (
    <>
    <img src={countryFlag} />
    <div>{countryName}</div>
    <div>{countryCapital}</div>
    <div>{countryTimeZones}</div>
    <div>{countryContinents}</div>
    <div>{countryPopulation}</div>
    </>
  )
}

export default Country