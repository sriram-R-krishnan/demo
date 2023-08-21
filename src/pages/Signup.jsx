import React, { useState } from 'react'
import API from '../API/LoginAPI'

const Signup = () => {

    const [details, setdetails] = useState({})

    const namechangeHandler = (e) => {
        setdetails({ ...details, name: e.target.value })
    }

    const mailchangeHandler = (e) => {
        setdetails({ ...details, mail: e.target.value })
    }

    const passwordchangeHandler = (e) => {
        setdetails({ ...details, password: e.target.value })
    }
    const submitHandler = () => {
        // console.log(details);
        API.post('/signup' , { name : details.name,email :details.mail,password:details.password })
    }

    

    return (
        <div className='login-cred'>
            <a href="/" className="title-cred"><p > ShoeStop</p></a>
            <input type="text" placeholder='Username' onChange={namechangeHandler} />
            <input type="Email" placeholder='email' onChange={mailchangeHandler} />
            <input type="Password" placeholder='Password' onChange={passwordchangeHandler} />
            <button className='login-btn' type='submit' onClick={() => { submitHandler() }}>SignUp</button>

            <a href='/login' className='login my-1'>
                <p>Already Having Account.! To Login ClickHere</p>
            </a>
        </div>
    )
}

export default Signup