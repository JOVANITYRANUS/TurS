import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';

const Homesa = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    };

    const [ticketId, setTicketId] = useState('');
    const [clientId, setClientId] = useState('');
    const [userId, setUserId] = useState('');
    const [hora, setHora] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    const [formaPago, setFormaPago] = useState('');
    const navigate = useNavigate();

    const submitSale = async (e) => {
        e.preventDefault();
        await Config.getSaleStore({
            ticket_id: ticketId,
            client_id: clientId,
            user_id: userId,
            hora,
            fechaCompra,
            formaPago
        });
        navigate('/admin/sale');
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitSale}>
                                <div className="form-group">
                                    <label>Ticket ID</label>
                                    <input
                                        className="form-control"
                                        value={ticketId}
                                        onChange={(e) => setTicketId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Client ID</label>
                                    <input
                                        className="form-control"
                                        value={clientId}
                                        onChange={(e) => setClientId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>User ID</label>
                                    <input
                                        className="form-control"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Hora</label>
                                    <input
                                        className="form-control"
                                        value={hora}
                                        onChange={(e) => setHora(e.target.value)}
                                        type="datetime-local"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Fecha de Compra</label>
                                    <input
                                        className="form-control"
                                        value={fechaCompra}
                                        onChange={(e) => setFechaCompra(e.target.value)}
                                        type="date"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Forma de Pago</label>
                                    <input
                                        className="form-control"
                                        value={formaPago}
                                        onChange={(e) => setFormaPago(e.target.value)}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear Venta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Homesa;
