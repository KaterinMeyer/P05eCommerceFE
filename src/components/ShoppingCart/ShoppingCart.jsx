import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx';

export const ShoppingCart = ({ showShoppingCart, handleCloseShoppingCart }) => {
    const shoppingCartCtx = useContext(ShoppingCartContext);
    const { products, getProducts, removeProduct } = shoppingCartCtx;
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!products) {
            getProducts();
        } else {
            setTotal(0);
            products.forEach(product => {
                const { price, quantity } = product;
                setTotal(current => current + price * quantity);
            });
        }
    }, [products]);

    const modalBodyStyle = {
        maxHeight: '400px',
        overflowY: 'auto',
    };

    const tableStyle = {
        marginBottom: '0',
    };

    const tableHeaderStyle = {
        backgroundColor: '#778da9',
        color: '#fff',
    };

    const tableFooterStyle = {
        backgroundColor: '#ddd',
    };

    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#778da9',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginRight: '10px',
    };

    return (
        <Modal show={showShoppingCart} onHide={handleCloseShoppingCart}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalBodyStyle}>
                {products?.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <Table style={tableStyle} striped bordered hover>
                        <thead>
                            <tr style={tableHeaderStyle}>
                                <th>Nr</th>
                                <th>Producto</th>
                                <th>Precio Unitario (USD)</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <Button
                                                style={buttonStyle}
                                                type='button'
                                                onClick={() => {
                                                    removeProduct(product.id);
                                                }}
                                            >
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='16'
                                                    height='16'
                                                    fill='currentColor'
                                                    className='bi bi-trash-fill'
                                                    viewBox='0 0 16 16'
                                                >
                                                    <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                                                </svg>
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr style={tableFooterStyle}>
                                <td colSpan='4'>Total a pagar: ${total} USD</td>
                            </tr>
                        </tfoot>
                    </Table>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type='button' onClick={() => {
                    navigate('/checkout')
                    handleCloseShoppingCart()
                }}>
                    Ir a pagar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}