import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemList from "./ItemList"
import './estilos.css';
const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const { cat } = useParams()
    useEffect(() => {

        
        const productosCollection = collection(db, "productos")

        if (cat) {
            const filtro = query(productosCollection, where("category", "==", cat))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                })

        } else {
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                })

        }

    }, [cat])

    return (
        <div>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer