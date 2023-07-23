import React from 'react'
import fotoantigua from '../../assets/restauranteantiguo.jpg'
import '../pages.css'

export const About = () => {
    return (
        <>
            <h1 className="titulo">Sobre Nosotros</h1>
            <h4 className="texto">El Restaurant München se instaló hace más 60 años en Chile y ha sido un punto de referencia para los amantes de la comida alemana en el país. 
                Con una decoración tradicional y acogedora, el restaurante ofrece un ambiente cálido y familiar que hace que los clientes disfruten de los 
                clásicos platos alemanes y de sus cervezas. 

                El menú del restaurante presenta una amplia selección de platos alemanes auténticos, 
                desde las clásicas salchichas y chucrut hasta platos más elaborados como el schnitzel y el pernil de cerdo. 
                Los ingredientes utilizados en la cocina son de alta calidad y se importan directamente de 
                Alemania para garantizar la autenticidad y el sabor original de cada plato.

                El restaurante también cuenta con una impresionante selección de cervezas alemanas, 
                que se sirven en jarras de cerveza auténticas y en las temperaturas adecuadas para disfrutar de su sabor único y refrescante. 

                El servicio es profesional, amable y atento, y el personal está siempre dispuesto a proporcionar recomendaciones y 
                asesoramiento a los clientes para garantizar una experiencia gastronómica excepcional. En resumen, el Restaurant München
                es un destino obligatorio para aquellos que buscan una auténtica experiencia gastronómica alemana en Chile.</h4>
        <img id="fotoantigua" src={fotoantigua} alt="Restaurante Antiguo" />
        </>
    )
};
