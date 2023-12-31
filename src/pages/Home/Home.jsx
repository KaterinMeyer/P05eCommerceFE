import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import UserContext from '../../contexts/users/UserContext';

export function Home() {
    const userCtx = useContext(UserContext)
    const { user } = userCtx
    const { fullName } = user
    return (

        <Container>
            <h1>{`Bienvenido ${fullName}`}</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-90"
                        src='../src/assets/typischedeutschegerichte.jpg' />
                    <Carousel.Caption>
                        <h3>Comida tradicional alemana</h3>
                        <p>Mucha variedad</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='../src/assets/Rezept_Linsen&Spätzle.jpg' />
                    <Carousel.Caption>
                        <h3>Platos tradicionales</h3>
                        <p>Para todos los gustos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='../src/assets/Goulasch.jpg' />
                    <Carousel.Caption>
                        <h3>Lo mejor de la región</h3>
                        <p>Deléitese con la comida alemana de verdad</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    )
}
export default Home