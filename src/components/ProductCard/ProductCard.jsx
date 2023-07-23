import {Button, Card} from 'react-bootstrap';

export const ProductCard = ({ product, productViewPath }) => {

    return (
        <Card style= { { width: '18rem' }} >
            <Card.Img variant="top" src={product.imageUrl} />
            {/* <Card.ImgOverlay> */}
                <Card.Body>
                    <Card.Title className= 'text-center'>{product.title}
                    </Card.Title>
                    <Card.Text className= 'text-center'>{product.description}
                    </Card.Text>
                    <Card.Text className= 'text-center'>{product.price}
                    </Card.Text>
                    <Button variant="primary" href={productViewPath} >Ver</Button>
                    <Button variant="primary" >Agregar</Button>
                </Card.Body>
            {/* </Card.ImgOverlay> */}

        </Card>
    )
}

