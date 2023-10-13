import './App.css'
import { Route,Routes } from 'react-router-dom'
import Countries from './pages/Countries'
import { createContext, useState } from 'react'
import Country from './pages/Country'
import Header from './conponents/Header'

export const CurrentCountry = createContext()
export const CountryData = createContext()

function App() {

  const [selectedCountry, setSelectedCountry] = useState("N/A")
  const [countryData, setCountryData] = useState([])

  return (
    <>
    <div className='site-wrapper'>
      <Header />
      <CurrentCountry.Provider  value={[selectedCountry, setSelectedCountry]}>
      <CountryData.Provider value= {[countryData, setCountryData]}>
        <Routes>
            <Route path = "/" element= {<Countries />} />
            <Route path ={`/${selectedCountry}`} element= {<Country />}/>
        </Routes>
      </CountryData.Provider>
      </CurrentCountry.Provider>
    </div>  
    </>
  )
}

export default App
