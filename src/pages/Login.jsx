import React,{useState} from 'react'
import API from '../API/LoginAPI'

const Login = () => {

  const [details, setdetails] = useState({})

  const mailchangeHandler = (e) => {
    setdetails({ ...details, mail: e.target.value })
}

const passwordchangeHandler = (e) => {
    setdetails({ ...details, password: e.target.value })
}

const submitHandler =async () => {
  console.log(details);
  const response = await API.post('/login', { email: details.mail, password: details.password });
  const responseData = await response.json();
  console.log(responseData);

  if(responseData.token){
    console.log("token is ready");
  }
  else{
    console.log('illa philipsae');
  }
  
}

  return (
    <div className='login-cred'>
      <a href="/" className="title-cred"><p > ShoeStop</p></a>
      <input type="Email" placeholder='email' onChange={mailchangeHandler}/>
      <input type="Password" placeholder='Password' onChange={passwordchangeHandler}/>
      <button className='login-btn' type='submit' onClick={()=>{submitHandler()}}>Login</button>

      <a href='/SignUp' className='login my-1'>
        <p>Not Having Account.! ClickHere to Signup</p>
      </a>
    </div>
  )
}

export default Login