import { useParams } from 'react-router-dom'
import { ProductView } from '../../../components/ProductView/ProductView.jsx'
import BotellaImage from '../../../assets/Botella.jpg';
import BrezelImage from '../../../assets/Brezel.jpg';
import WurstImage from '../../../assets/Wurst.jpg';
import GoulaschImage from '../../../assets/Goulasch.jpg';
import RoteImage from '../../../assets/Rote Grütze.jpg';
import TorteImage from '../../../assets/Schwarzwälder Kirschtorte.jpg';
import { Container } from 'react-bootstrap';

export const Product = () => {
    const products = [{
        id: "1",
        title: "Shop Cerveza Tradicional",
        description: "Lúpulos, Trigo o Weizen",
        price: 20,
        imageUrl: BotellaImage
    },
    {
        id: "2",
        title: "Brezel",
        description: "Pan tradicional con forma de lazo",
        price: 5,
        imageUrl: BrezelImage
    },
    {
        id: "3",
        title: "Tabla de Salchichas Tradicional",
        description: "Surtido de Salchicas Tradicionales para degustar y compartir",
        price: 25,
        imageUrl: WurstImage
    },
    {
        id: "4",
        title: "Glouasch con Spätzle",
        description: "Tradicional Guiso de Carne (picante) acompañado de fideos típicos de la zona",
        price: 30,
        imageUrl: GoulaschImage
    },
    {
        id: "5",
        title: "Rote Grütze",
        description: "Frutos del bosque cocidos acompañado de crema batida.",
        price: 15,
        imageUrl: RoteImage
    },
    {
        id: "6",
        title: "Selva Negra",
        description: "Torta tradicional del Schwarzwald, el bosque negro, sur de Alemania",
        price: 13,
        imageUrl: TorteImage
    }]

    const { productId } = useParams()
    const product = products.find(product => product.id === productId);
    
    return (

        <ProductView product={product}></ProductView>

    )

}

export default Product