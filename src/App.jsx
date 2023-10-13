import './App.css'
import { Route,Routes } from 'react-router-dom'
import Countries from './pages/Countries'
import { createContext, useState } from 'react'
import Country from './pages/Country'
import Header from './conponents/Header'
import Home from './pages/Home'
import Contact_Us from './pages/Contact_Us'

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
            <Route path = "/countries" element= {<Countries />} />
            <Route path = "/contact_us" element= {<Contact_Us />} />
            <Route path ={`/countries/${selectedCountry}`} element= {<Country />}/>
        </Routes>
      </CountryData.Provider>
      </CurrentCountry.Provider>
    </div>  
    </>
  )
}

export default App
