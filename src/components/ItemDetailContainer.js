import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect, useState } from 'react';
import {items} from "./auxiliares"
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [producto,setProducto] = useState([]) //defino un array vacio (producto) por defecto del useState

    useEffect(() => {
      document.title =  `Mirando ${itemId}!` // chequeo que se dispare el hook
      //setProducto([]) // lo vacío cada vez que itemId changes
    
      let simulacionPedido = new Promise((res) => {
        setTimeout(() => {
            res(items)
        }, 500)
    })
    simulacionPedido
        .then((items) => {          
               setProducto(items.filter(items => {return items.id.toString().includes(itemId)}))      
        })
        .catch((error) => {
            console.log(error)
        })
    }, [itemId])
    

  return (
    <>
        <div>ItemDetailContainer</div>
        <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer