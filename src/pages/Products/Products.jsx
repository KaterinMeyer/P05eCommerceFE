import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import axiosClient from "../../config/axios.jsx";
import UserContext from '../../contexts/user/UserContext.jsx';
import '../pages.css';
import BotellaImage from '../../assets/Botella.jpg';
import ProstImage from '../../assets/Prost.jpg';
import BrezelImage from '../../assets/Brezel.jpg';
import WurstImage from '../../assets/Wurst.jpg';
import GoulaschImage from '../../assets/Goulasch.jpg';
import RoteImage from '../../assets/Rote Grütze.jpg';
import TorteImage from '../../assets/Schwarzwälder Kirschtorte.jpg';

export const Products = () => {
    const userCtx = useContext(UserContext)
    const { user } = userCtx

    const products = [{
        id: "1",
        title: "Shop Cerveza Tradicional",
        description: "Lúpulos, Trigo o Weizen",
        price: 20,
        imageUrl: BotellaImage
    }, 
    // {
    //     id: "2",
    //     title: "Degustación de Cervezas Tradicionales",
    //     description: "Lúpulos, Trigo y Weizen",
    //     price: 40,
    //     imageUrl: Prost
    // }, 
    {
        id: "3",
        title: "Brezel",
        description: "Pan tradicional con forma de lazo",
        price: 5,
        imageUrl: BrezelImage
    }, {
        id: "4",
        title: "Tabla de Salchichas Tradicional",
        description: "Surtido de Salchicas Tradicionales para degustar y compartir",
        price: 25,
        imageUrl: WurstImage
    }, {
        id: "5",
        title: "Glouasch con Spätzle",
        description: "Tradicional Guiso de Carne (picante) acompañado de fideos típicos de la zona",
        price: 30,
        imageUrl: GoulaschImage
    }, {
        id: "6",
        title: "Rote Grütze",
        description: "Frutos del bosque cocidos acompañado de crema batida.",
        price: 15,
        imageUrl: RoteImage
    }, {
        id: "7",
        title: "Selva Negra",
        description: "Torta tradicional del Schwarzwald, el bosque negro, sur de Alemania",
        price: 13,
        imageUrl: TorteImage
    }]

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="titulo">Menú para {user?.fullName || "invitado"}</h1>
                </Col>
            </Row>
            <Row>
                {products.map(product => {
                    return <Col key={product._id}>
                        <ProductCard product={product} productViewPath={`/products/${product._id}`}></ProductCard>
                    </Col>
                })
                }
            </Row>
        </Container>

    )
}

export default Products