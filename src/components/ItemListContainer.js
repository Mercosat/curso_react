import React from 'react'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import ItemList from './ItemList'
import {items} from "./auxiliares"

const ItemListContainer = (greeting) => {
    const {seccion} = useParams()
    const [productos,setProductos] = useState([]) //defino un array vacio (productos) por defecto del useState
    useEffect(() => {
        document.title =  `Hora de ${seccion}!` // chequeo que se dispare el hook
        setProductos([]) // lo vacío cada vez que seccion changes
        
        let simulacionPedido = new Promise((res) => {
            setTimeout(() => {
                res(items)
            }, 1000)
        })
        simulacionPedido
            .then((items) => {
                if(!seccion || seccion==='qwerty'){
                    setProductos(items) //productos=items
                    } else {
                   setProductos(items.filter(items => {return items.seccion.includes(seccion)}))
                }  
            })
            .catch((error) => {
                console.log(error)
            })

      }, [seccion]); // Only re-run the effect if seccion changes

    return (
        <>
            <div>
                <p>¿Cómo te va <b>{greeting.nombre}</b>?</p>
                <p>Esto es ItemListContainer en {seccion} hay {productos.length}</p>              
                { productos.length == 0 ? <h1>Cargando...</h1> : <ItemList productos={productos}/> }
            </div>
        </>
    )
}

export default ItemListContainer