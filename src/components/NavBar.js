import React from 'react'
import { Route, Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import logo from '../logo.svg';

const NavBar = () => {
    let nombre="Hachi tu mare"
    return (
        <>
            <header>
                <div className='brand'>
                    <NavLink to="/">
                        <img className='App-logo' src={logo}></img>
                    </NavLink>
                </div>
                <ul>
                    <li><NavLink to="/prods/tazas">Tazas</NavLink></li>
                    <li><NavLink to="/prods/remeras">Remeras</NavLink></li>
                    <li><NavLink to="/prods/custom">Custom</NavLink></li>
                    <li><NavLink to="/prods/qwerty">404</NavLink></li>
                </ul>
                <CartWidget />
            </header>
            <Routes>
                <Route path='/' element={<ItemListContainer nombre={nombre}/>}  />
                <Route path='/prods/:seccion' element={<ItemListContainer nombre={nombre}/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path='*' element={<p>404</p>}/>
                <Route />
            </Routes>
        </>
    )
}

export default NavBar