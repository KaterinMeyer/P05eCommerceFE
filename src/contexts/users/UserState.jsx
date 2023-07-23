import { useReducer } from "react"
import UserContext from "./UserContext"
import userReducers from "./UserReduce"
import axiosClient from "../../config/axios.jsx"

const UserState = (props) => {
    const intialState = {
        user: {
            id: null,
            fullName: null,
            email: null
        },
        authStatus: false,
    }

    const [globalState, dispatch] = useReducer(userReducers, intialState)

    const registerUser = async (dataForm) => {
        try {
            const res = await axiosClient.post("/auth/signup", dataForm)
            const payload = await res.data
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: payload
            })

        } catch (error) {
            console.error(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
        } else {
            delete axiosClient.defaults.headers.common.Authorization
        }

        try {
            const res = await axiosClient.get('/users/profile')
            const userData = res.data
            dispatch({
                type: "OBTENER_USUARIO",
                payload: userData
            })
        } catch (error) {
            console.error(error)

            dispatch({
                type: "CERRAR_SESION"
            })
        }
    }

    const logout = () => {
        dispatch({
            type: "CERRAR_SESION"
        })
    }

    const loginUser = async (dataForm) => {
        try {
            const res = await axiosClient.post("/auth/login", dataForm)
            const payload = await res.data
            dispatch({
                type: "LOGIN_EXITOSO",
                payload: payload
            })

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <UserContext.Provider value={{
            ...globalState,
            registerUser,
            loginUser,
            verifyingToken,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState