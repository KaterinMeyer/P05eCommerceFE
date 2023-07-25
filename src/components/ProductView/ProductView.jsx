import { useContext } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx'
import '../../pages/pages.css'


export const ProductView = ({ product }) => {
    const shoppingCartCtx = useContext(ShoppingCartContext)
    const { addProduct } = shoppingCartCtx

    const buttonStyle = {
        backgroundColor: '#778da9', // Change this color to your desired button color
        color: '#fff', // Set the text color for the button
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <Container fluid style={{ marginTop: 20 }}>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
                    <Image src={product.imageUrl} width={500} height={500} fluid >
                    </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Row style={{ gap: 40 }}>
                        <Col className='titulo' xs={12} sm={12} md={12} >{product.title}</Col>
                        <Col className='text-center' xs={12} sm={12} md={12}>{product.description}</Col>
                        <Col className='text-center' xs={12} sm={12} md={12}>{product.price} USD</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "center" }}>
                            <Button variant="primary" style={buttonStyle} onClick={() => {
                                addProduct(product)
                            }}>Agregar al carrito</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}