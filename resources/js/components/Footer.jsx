import React from "react";
import './Footers.css'; // Importar el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const enviarMensajeWhatsApp = () => {
    const numeroTelefono = "+9514255795";
    const mensaje = "Hola, Me podria dar informacion";
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
};

const openGoogleMaps = () => {
    const location = "1Estado Tecnologico de Oaxaca"; 
    window.open(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAajPLKQ9Pj-RLT4vbLUcX9NaUxKt1Hj-E=${location}`, "_blank");
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Sobre Nosotros</h2>
                    <p>Somos una plataforma dedicada a la gestión eficiente de la salida de camiones. Facilitamos la programación de rutas, la asignación de conductores y el seguimiento en tiempo real de los vehículos.</p>
                </div>
                <div className="footer-section links">
                    <h2>Enlaces Rápidos</h2>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/rutas">Rutas</a></li>
                        <li><a href="/conductores">Conductores</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contacto</h2>
                    <ul>
                        <li><span><FontAwesomeIcon icon={faPhone} /></span> 123-456-789</li>
                        <li><span><FontAwesomeIcon icon={faEnvelope} /></span> info@gestiondecamiones.com</li>
                        <li>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} onClick={openGoogleMaps} style={{ cursor: 'pointer' }} /></span> Ubicación
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faWhatsapp} onClick={enviarMensajeWhatsApp} style={{ cursor: 'pointer' }} /></span> WhatsApp
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gestión de Camiones. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;

