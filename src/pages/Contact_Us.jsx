import React from 'react'
import { useEffect } from 'react'

const Contact_Us = () => {
  
  const handleSubmit = () =>{
    console.log(formData)
  }

  return (
    <>
    <div className='form-container'>
        <form onSubmit={() =>{handleSubmit(email)}} className='contact-form'>
            First Name:<input type="text" name ="first_name" required></input>
            Email: <input type="email" name="email" required></input>
            Message:<input className='message-box' type='text' required></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    </>
  )
}

export default Contact_Us