import React, { useState } from 'react'


const Contact_Us = () => {
  
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(message)
    setEmail("")
    setFirstName("")
    setMessage("")
  }

  return (
    <>
    <h2>Contact Us!</h2>
    <div className='form-container'>
        <form onSubmit={handleSubmit} className='contact-form'>
            First Name:<input type="text" value={firstName} onChange={(e) =>{setFirstName(e.target.value)}} required></input>
            Email: <input type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} required></input>
            Message:<input className='message-box' type='text' value={message} onChange={(e) =>{setMessage(e.target.value)}} required></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    </>
  )
}

export default Contact_Us