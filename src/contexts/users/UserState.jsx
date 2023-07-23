import { useReducer } from "react"
import UserContext from "./UserContext"
import userReducers from "./UserReduce"

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
            const res = await fetch("http://localhost:4500/auth/signup", { method: 'POST', headers: { "Content-type": 'application/json', "Accept": 'application/json' }, body: JSON.stringify(dataForm) })
            const payload = await res.json()
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
            const res = await fetch("http://localhost:4500/auth/login", { method: 'POST', headers: { "Content-type": 'application/json', "Accept": 'application/json' }, body: JSON.stringify(dataForm) })
            const payload = await res.json()
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