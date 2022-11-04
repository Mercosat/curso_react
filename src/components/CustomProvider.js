import React from 'react'
import { createContext, useState } from 'react';

export const contexto = createContext() // Contexto vacío  
  const CustomProvider = ({children}) => {

    const {Provider} = contexto
    const [total,setTotal] = useState(25)

    const vaciarCarrito = () => {
        setTotal(0)
    }
    
    const valorContexto = {
        productos:["a","b","c"],
        total:total,
        vaciarCarrito:vaciarCarrito
    }
    
    return (
        <Provider value={valorContexto}>
        {children}
        </Provider>
    )
  }
  
  export default CustomProvider