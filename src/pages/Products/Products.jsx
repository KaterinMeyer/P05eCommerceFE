import { Col, Container, Row } from "react-bootstrap"
import { ProductCard } from "../../components/ProductCard/ProductCard"

export const Products = () => {
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

    },
    ]

    return (
        <Container>
            <Row>
                <Col>
                    Menú
                </Col>
            </Row>
            <Row>
                {
                    products.map(product => {
                        return <Col key= {product.id}>
                        <ProductCard product={product} productViewPath = {`/products/${product.id}`}></ProductCard>
                        </Col>
                    })
                }
            </Row>
        </Container>

    )
}


export default Products