import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx';

export const ProductCard = ({ product, productViewPath }) => {
    const shoppingCartCtx = useContext(ShoppingCartContext);
    const { addProduct } = shoppingCartCtx;

    return (
        <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={product.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title className='text-center'>{product.title}</Card.Title>
                <Card.Text className='text-center'>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Body className='text-center d-flex flex-column'>
                <Card.Text className='text-center'>
                    ${product.price} USD
                </Card.Text>
                <div>
                    <Button variant="secondary" href={productViewPath} style={{ width: '80%', height: '40px' }}>Ver</Button>
                    <Button variant="primary" onClick={() => addProduct(product)} className="mt-2" style={{ width: '80%', height: '40px' }}>Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    );
};
