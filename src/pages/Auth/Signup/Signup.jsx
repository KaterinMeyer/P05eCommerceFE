import React, { useContext, useState, useRef } from 'react';
import UserContext from '../../../contexts/user/UserContext.jsx';

export const SignUp = () => {
    const userCtx = useContext(UserContext);
    const { registerUser } = userCtx;
    const [formValues, setFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        if (!formValues.name || !formValues.surname || !formValues.email || !formValues.password) {
            setShowPopup(true);
        } else {
            registerUser(formValues);
            console.log(formValues);
        }
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
            <h1 className="titulo" style={{ textAlign: 'center', marginBottom: '20px' }}>Registro</h1>
            {showPopup && <p style={{ color: 'red', textAlign: 'center' }}>Favor ingresar todos los campos.</p>}
            <form ref={formRef} style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle} htmlFor='name'>Nombre:</label>
                <input
                    style={inputStyle}
                    id='name'
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleFormChange}
                />

                <label style={labelStyle} htmlFor='surname'>Apellido:</label>
                <input
                    style={inputStyle}
                    id='surname'
                    name='surname'
                    type='text'
                    value={formValues.surname}
                    onChange={handleFormChange}
                />

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

                <button style={buttonStyle} type='submit'>Registrarse</button>
            </form>
        </div>
    );
};
