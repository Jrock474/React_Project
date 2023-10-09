import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [countryPictures, setCountryPictures] = useState([]);
  const [CountryData, setCountryData] = useState([])

  const [countryName, setCountryName] = useState([])
  const [countryCapital, setCountryCapital] = useState([])
  const [countryTimeZones, setCountryTimeZones] = useState([])
  const [countryContinents, setCountryContinents] = useState([])
  const [countryPopulation, setCountryPopulation] = useState([])
  const [searchInput, setSearchInput] = useState("")
  

  const getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    let pictureList = []
    let nameList = []
    
    for (let i = 0; i < data.length; i++) {
      pictureList.push(data[i].flags.png)
      nameList.push(data[i].name.common)
    }
    setCountryPictures(pictureList)
    setCountryData(data)
  };


  const getCountryData = async(countryName) =>{
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    let data = await response.json()
    for (let i=0; i < data.length; i++){
        setCountryName(data[i].name.common)
        console.log(data[i].name.common)
        setCountryCapital(data[i].capital[0])
        console.log(data[i].capital[0])
        setCountryTimeZones(data[i].timezones[0])
        console.log(data[i].timezones[0])
        setCountryContinents(data[i].continents[0])
        console.log(data[i].continents[0])
        setCountryPopulation(data[i].population)
        console.log(data[i].population)
    }
  }


  const onInputChange = (e) =>{
    setSearchInput(e.target.value)
  }


  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div>
        <div>
        <input type="text" value={searchInput} onChange={onInputChange}></input>
        <button>Search</button>

        </div>
        <ul>
          {CountryData.map((data, index) => (
              <li key={index} className="flag-list">
                <img src={data.flags.png} />
                <button  onClick={(()=>{getCountryData(data.name.common)})} ><Link to="/country">Learn More</Link></button>
                
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
