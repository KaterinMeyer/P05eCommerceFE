import UserContext from "./UserContext"

const UserState = (props) => {
    const intialState ={
        user: {
            id: null,
            fullName: null,
            email: null
        },
        authStatus: false,
    }

        return (
            <UserContext.Provider>
                {props.children}
            </UserContext.Provider>
        )
}

export default UserState