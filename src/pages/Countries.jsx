import React from 'react'

const Countries = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [continentSearchInput, setContinentSearchIncput] = useState("")

  const getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    console.log(data)
    setAllCountries(data)
    setFilteredCountries(data)
  };


  const [countryPage, setCountryPage] = useContext(CurrentCountry)
  const [countryData, setCountryData] = useContext(CountryData)

  const navigate = useNavigate()

  const getCountryData = async(selectedCountry) =>{
    let response = await fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
    let data = await response.json()

    setCountryPage(selectedCountry.replaceAll(' ', ''))
    let country = ""
    
    for (let i=0; i < data.length; i++){
        setCountryData(data[i]);
      } 
      country = selectedCountry.replaceAll(' ', '');
    navigate(`/countries/${country}`)
  }


  const onInputChange = (e) =>{
    setSearchInput(e.target.value)
    let countriesFiltered = allCountries.filter(country =>{
      let title = country.name.official.toLowerCase()
      let searchTerm = title.includes(searchInput.toLowerCase())
      return searchTerm
    })
    setFilteredCountries(countriesFiltered)
  }

  const onInputContinentChange = (e) =>{
    setContinentSearchIncput(e.target.value)
    let countriesFiltered = allCountries.filter(country =>{
      let title = country.continents[0].toLowerCase()
      let searchTerm = title.includes(continentSearchInput.toLowerCase())
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
        <input type="text" value={continentSearchInput} onChange={onInputContinentChange} />
      </div>
      <ul className="country-flag-container">
        {filteredCountries.map((data, index) => (
            <li key={index} className="flag-list">
              <img src={data.flags.png} />
              <p>{data.name.official}</p>
              <button onClick={(()=>{getCountryData(data.name.official)})}>Details</button>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Countries;
