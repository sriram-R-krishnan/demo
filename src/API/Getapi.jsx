import React, { useContext, useEffect } from 'react'
import { productContext } from '../context/Context'

const Getapi = () => {

    const { products, setProducts } = useContext(productContext)
    
    const baseURL = 'http://localhost:5000'

    useEffect(() => {
       try{
        const fetchAllData = async () => {
            let response =await fetch(`${baseURL}/api/getproducts`)
            if(response.ok)
            {
                setProducts(await response.json());
            }
        }

        fetchAllData()
       }
       catch(error){
        console.log(error);
       }
    }, [])

    return (
        <></>
    )
}

export default Getapi