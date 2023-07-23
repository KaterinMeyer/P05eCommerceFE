import { useContext, useEffect, useState } from 'react';

import UserContext from '../../contexts/user/UserContext.jsx';
export const Products = () => {
    const userCtx = useContext(UserContext)
    const { user } = userCtx
    //llama a la api para ver productos (/products)
    const products = [{
        id: "1",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }, {
        id: "2",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }, {
        id: "3",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }, {
        id: "4",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }, {
        id: "5",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }, {
        id: "6",
        title: "Producto 1",
        description: "Descripcion",
        price: 50444,
        imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
    }]
}
    export default Products