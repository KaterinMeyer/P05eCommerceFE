import ShoppingCartContext from './ShoppingCartContext.jsx'
import { useShoppingCartReducer } from './ShoppingCartReducer.jsx'

const ShoppingCartState = (props) => {
    const initialState = {
        products: null
    }

    const [globalState, dispatch] = useShoppingCartReducer(initialState)

    const addProduct = (product) => {
        dispatch({
            type: "AGREGAR_PRODUCTO",
            payload: {
                product
            }
        })
    }

    const removeProduct = (productId) => {
        dispatch({
            type: "QUITAR_PRODUCTO",
            payload: {
                productId
            }
        })
    }

    const getProducts = () => {
        dispatch({
            type: "OBTENER_PRODUCTOS",
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            ...globalState,
            addProduct,
            removeProduct,
            getProducts
        }} displayName="ShoppingCartContext">
            {
                props.children
            }
        </ShoppingCartContext.Provider>
    )

}

export default ShoppingCartState