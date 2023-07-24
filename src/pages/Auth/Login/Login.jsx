import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/user/UserContext.jsx";

export const Login = () => {
    const userCtx = useContext(UserContext);
    const { loginUser } = userCtx;
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(event) {
        event.preventDefault();
    
        if (!formValues.email || !formValues.password) {
            alert('Favor ingresar correo y contraseña');
            return;
        }
    
        await loginUser(formValues);
        navigate('/profile');
    }
    function handleFormChange(event) {
        const { target } = event;
        const { name, value } = target;
        const newValues = { ...formValues, [name]: value };
        setFormValues(newValues);
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        fontSize: '16px',
    };

    const labelStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#778da9',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    };

    return (
        <div>
            <h1 className= "titulo" style={{ textAlign: 'center', marginBottom: '20px' }}>Ingreso</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle} htmlFor='email'>Correo:</label>
                <input
                    style={inputStyle}
                    id='email'
                    name='email'
                    type='email'
                    value={formValues.email}
                    onChange={handleFormChange}
                />

                <label style={labelStyle} htmlFor='password'>Contraseña:</label>
                <input
                    style={inputStyle}
                    id='password'
                    name='password'
                    type='password'
                    value={formValues.password}
                    onChange={handleFormChange}
                />

                <button style={buttonStyle} type='submit'>Ingresar</button>
            </form>
        </div>
    );
};
