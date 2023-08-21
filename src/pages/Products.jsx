import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { productContext } from '../context/Context'
import LoginAPI from '../API/LoginAPI'

const Products = () => {
    const { products } = useContext(productContext)

    LoginAPI.get('/api/getproducts').then(res=> console.log(res))

    return (
        <div>
            <Navbar />
            <div className="products">
              
                {products.length == 0 ? <div> <p>no data</p></div> : <div>
                    <div className="layout">
                        {products.map((li) => {
                            return <div className="card" key={li._id}>
                                <img src={li.image} className='pro-image' />
                                <p className="title">{li.title}</p>
                                <div className="details">
                                    <p className="company">Brand : {li.company}</p>
                                    <p className="price">Price : {li.price}</p>
                                </div>
                                <div className="btns">
                                    <button className='wish'>Add to wishlist</button>
                                    <button className='cart'>Add to Cart</button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default Products