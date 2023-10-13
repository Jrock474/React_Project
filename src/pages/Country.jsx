import React, { useEffect } from 'react'
import { CountryData } from '../App'
import { useContext,useState } from 'react'

const Country = () => {

  const [isLightboxActive, setIsLightBoxActive] = useState(false)
  const [lightbox, setLightBox] = useState("") 
  
  const imageClick = (image) =>{
      if (isLightboxActive === false){
          setLightBox(image)
          setIsLightBoxActive(true)
      } 
  }

  const lightboxImageClick = (e) =>{
      if(e != lightbox) {
          setIsLightBoxActive(false)
          setLightBox("")
      }
  }

  const [gMaps, setGMaps] = useState("")
  const [flagDescription, setFlagDescriptions] = useState("")
  const [countryFlag, setCountryFlag] = useState([])
  const [countryName, setCountryName] = useState([])
  const [countryCapital, setCountryCapital] = useState([])
  const [countryTimeZones, setCountryTimeZones] = useState([])
  const [countryContinents, setCountryContinents] = useState([])
  const [countryPopulation, setCountryPopulation] = useState([])

  let data = useContext(CountryData)

  // useEffect(()=>{
  //   setGMaps(data[0].maps.googleMaps)
  //   setFlagDescriptions(data[0].flags.alt)
  //   setCountryFlag(data[0].flags.svg)
  //   setCountryName(data[0].name.official)
  //   setCountryCapital(data[0].capital[0])
  //   setCountryTimeZones(data[0].timezones[0])
  //   setCountryContinents(data[0].continents[0])
  //   setCountryPopulation(data[0].population)
  // },[])




  return (
    <>
    {/* <div className='country-container'>
    {isLightboxActive === true ? <div onClick={(e) =>{lightboxImageClick(e.target.src)}} id="lightbox"><img src ={lightbox}></img></div> : null}
      <h2 className='country-name'>{countryName}</h2>
      <div className='country-flag-container'>
        <img onClick={(e) =>{imageClick(e.target.src)} } className="country-flag" src={countryFlag} />
      </div>
      {flagDescription != null ? <p className='flag-description'>Flag Description: {flagDescription}</p> : null }
      <p className='country-capital'>Capital: {countryCapital}</p>
      <p className='country-timezone'>Timezone(s): {countryTimeZones}</p>
      <p className='country-continents'>Continent: {countryContinents}</p>
      <p className='country-population'>Population: {countryPopulation}</p>
      <a href={gMaps} target="_blank">Google Maps</a>
    </div> */}
    </>
  )
}

export default Country