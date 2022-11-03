import ItemCount from "./ItemCount"
const ItemDetail = ({producto}) => {
    return (
        <div>
             {
                producto.map(
                    (producto, indice) => (
                      <div key={indice}>
                            <h2>{producto.nombre} - ${producto.precio}</h2>
                            <img src={producto.foto} alt={producto.nombre} />
                            <p>{producto.desc}</p>
                            <ItemCount />                
                        </div>
                    )
                )
            }
        </div>
    )
}
export default ItemDetail