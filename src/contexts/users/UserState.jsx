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
            loginUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState