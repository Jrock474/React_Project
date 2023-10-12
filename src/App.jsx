import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
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
            <Route path = "/" element= {<Home />} />
            <Route path ={`/${selectedCountry}`} element= {<Country />}/>
        </Routes>
      </CountryData.Provider>
      </CurrentCountry.Provider>
    </div>  
    </>
  )
}

export default App
