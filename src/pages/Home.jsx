import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/countries")
    }
    
  return (
    <>
    <div className='home-bg'>
        <div className='color-bg'>
            <div className='home-container'>
                <h2>Welcome to Geographic Search!</h2>
                <p>
                    The purpose of Goegraphic Search is to provide details of known countries by providing geograpic information tailored to each individual Country
                </p>
                <button onClick={handleClick}>Explore</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home