import { Container, Row, Col, Image, Button } from "react-bootstrap"

export const ProductView = ({ product }) => {
    return (
        <Container fluid style={{ marginTop: 10 }}>
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <Image src={product.imageUrl}>
                    </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Row style={{ gap: 40 }}>
                        <Col xs={12} sm={12} md={12}>{product.title}</Col>
                        <Col xs={12} sm={12} md={12}>{product.description}</Col>
                        <Col xs={12} sm={12} md={12}>{product.price}</Col>
                    </Row>
                    <Row style={{ gap: 40 }}>
                        <Col>
                            <Button>Agregar al Carrito</Button>
                        </Col>
                        <Col>
                            <Button>Comprar</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
} 