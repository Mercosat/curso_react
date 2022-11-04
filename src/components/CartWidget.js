import React from 'react'
import { useContext } from 'react';
import {contexto} from './CustomProvider'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {

  const valorContexto = useContext(contexto)

  return (
    <div className='cartwidyet'>       
        <ShoppingCartIcon onClick={valorContexto.vaciarCarrito}/>
        <div className='burbuja'>{valorContexto.total}</div>
    </div>
  )
}

export default CartWidget