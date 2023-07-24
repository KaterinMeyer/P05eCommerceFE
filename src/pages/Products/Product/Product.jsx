import React from 'react';

const Product = ({ match }) => {
    // Extract the product ID from the URL parameter
    const { id } = match.params;

    // Replace this dummy data with the actual data fetching logic from your backend
    const product = {
        id: "1",
        title: "Shop Cerveza Tradicional",
        description: "Lúpulos, Trigo o Weizen",
        price: 20,
        imageUrl: "BotellaImage"
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.title} />
        </div>
    );
};

export default Product;
