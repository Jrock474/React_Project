import React from 'react'
import { useEffect } from 'react'

const Contact_Us = () => {
  useEffect(()=>{
    console.log("hiyo")
  },[])
  return (
    <>
    <div className='form-container'>
        <form className='contact-form'>
            First Name:<input type="text" name ="name"></input>
            Email: <input type="email" name="Email"></input>
            Message:<input className='message-box' type='text' required></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Contact_Us