import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [countryPictures, setCountryPictures] = useState([]);

  const getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    let pictureList = []
    
    for (let i = 0; i < data.length; i++) {
      pictureList.push(data[i].flags.png)
    }
    setCountryPictures(pictureList)
  };
  useEffect(() => {
    getCountries();
  }, []);

  console.log(countryPictures);

  return (
    <>
      <div>
        hi
        <ol>
          {countryPictures &&
            countryPictures.map((picture, index) => (
              <li key={index} className="flag-list">
                <img src={picture} />
              </li>
            ))}
        </ol>
      </div>
    </>
  );
};

export default Home;
