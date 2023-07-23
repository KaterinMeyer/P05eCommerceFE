import { useParams } from "react-router-dom"
import { ProductView } from "../../../components/ProductView/ProductView"

export const Product = () => {
    const products = [{
        id: "1",
        title: "Producto 1",
        description: "Descripción",
        price: 12900,
        imageUrl: "../src/assets/typischedeutschegerichte.jpg"

    },
    {
        id: "2",
        title: "Producto 2",
        description: "Descripción",
        price: 15900,
        imageUrl: "../src/assets/typischedeutschegerichte.jpg"

    },
    {
        id: "3",
        title: "Producto 3",
        description: "Descripción",
        price: 22900,
        imageUrl: "../src/assets/typischedeutschegerichte.jpg"

    }]
    const { productId } = useParams()
    // Llamar API para obtener un producto por id
    const product = products.find(product => product.id === productId)
    return (
        <ProductView product={product}></ProductView>
    )
}

export default Product