import React from 'react'
import { Link } from 'react-router-dom';
const ItemList = ({productos}) => {
    return (
        <ul>
            {
                productos.map(
                    (producto, indice) => (
                        <li key={indice}>
                            <Link to={`/item/${producto.id}`}>
                            {producto.nombre}
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default ItemList