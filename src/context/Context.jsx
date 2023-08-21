import React, { createContext, useState } from 'react'

export const productContext = createContext()

const Context = ({children}) => {

    const [products,setProducts] = useState([])

  return (
    <productContext.Provider value={{products,setProducts}}>
        {children}
    </productContext.Provider>
  )
}

export default Context