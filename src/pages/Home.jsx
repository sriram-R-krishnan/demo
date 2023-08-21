import React from 'react'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  return (
    <div>
        <Navbar/>
 
        <div className="home">
            <p> Your One Destination Shoestop is Here</p>
            <button><a href="/products" className='btn'> Shop Now </a></button>
        </div>
    </div>
  )
}

export default Home