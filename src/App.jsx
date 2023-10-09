import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import { createContext, useState } from 'react'
import Country from './pages/Country'

export const CurrentCountry = createContext()

function App() {
  const [selectCountry, setSelectCountry] = useState("N/A")
  return (
    <>
    <div className='site-wrapper'>
      <CurrentCountry.Provider  value={[selectCountry, setSelectCountry]}>
        <Routes>
            <Route path = "/" element= {<Home />} />
            <Route path = "/country" element= {<Country />}/>
        </Routes>
      </CurrentCountry.Provider>
      


    </div>  
    </>
  )
}

export default App
