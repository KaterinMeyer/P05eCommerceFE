import { useContext } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext';
import '../pages.css'

export function Home() {
    const userCtx = useContext(UserContext)
    const { user, verifyingToken, authStatus } = userCtx
    return (

        <Container fluid>
            <h1 className="titulo">{`Willkommen ${user?.fullName || ""}`}</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src='../src/assets/botella.jpg' />
                    <Carousel.Caption style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                    }}>
                        <h3>Comida y Bedidas Tradicionales de Alemania</h3>
                        <p>De todos los tipos para todos los gustos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='../src/assets/Brezel.jpg' />
                    <Carousel.Caption style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                    }}>
                        <h3>Platos Tradicionales y Platos Modernos</h3>
                        <p>Venga a disfrutar con familia y amigos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='../src/assets/Wurst.jpg' />
                    <Carousel.Caption style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                    }}>
                        <h3>Los mejores ingredientes traidos directamente desde Alemania</h3>
                        <p>Calidad original alemana</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    )
}
export default Home