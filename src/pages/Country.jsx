import React, { useEffect } from 'react'
import { CountryData } from '../App'
import { useContext,useState } from 'react'
import Country_Details from '../conponents/Country_Details'

const Country = () => {


  return (
    <>
     <div className='country-container'>
    <Country_Details />
    </div> 
    </>
  )
}

export default Country