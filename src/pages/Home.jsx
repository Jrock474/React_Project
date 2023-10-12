import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentCountry } from "../App";
import { CountryData } from "../App";

const Home = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const getCountries = async () => {
    console.log("Called getCountries")
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    setAllCountries(data)
    setFilteredCountries(data)
  };


  const [countryPage, setCountryPage] = useContext(CurrentCountry)
  const [countryData, setCountryData] = useContext(CountryData)

  const navigate = useNavigate()

  const getCountryData = async(selectedCountry) =>{
    let response = await fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
    console.log("Response: ", response)
    let data = await response.json()

    setCountryPage(selectedCountry)
    let country = ""
    
    for (let i=0; i < data.length; i++){
        setCountryData(data[i])
        country = data[i].name.common
      } 
    navigate(`/${country}`)
  }


  const onInputChange = (e) =>{
    setSearchInput(e.target.value)
    let countriesFiltered = allCountries.filter(country =>{
      let title = country.name.common.toLowerCase()
      let searchTerm = title.includes(searchInput.toLowerCase())
      return searchTerm
    })
    setFilteredCountries(countriesFiltered)


  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className="search-container">
        <input type="text" value={searchInput} onChange={onInputChange} />
        <button>Search</button>
      </div>
      <ul className="country-flag-container">
        {filteredCountries.map((data, index) => (
            <li key={index} className="flag-list">
              <img src={data.flags.svg} />
              <button onClick={(()=>{getCountryData(data.name.common)})}>Details</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
