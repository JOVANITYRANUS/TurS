import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeTi = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    };

    const [client_id, setClientId] = useState('');
    const [journey_id, setJourneyId] = useState('');
    const [costoTicket, setCostoTicket] = useState('');
    const [asiento, setAsiento] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const navigate = useNavigate();

    const submitStore = async (e) => {
        e.preventDefault();
        await Config.getTickStore({ client_id, journey_id, costoTicket, asiento, nombreCliente });
        navigate('/admin/ticket');
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitStore}>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label>Cliente ID</label>
                                        <input
                                            className="form-control"
                                            value={client_id}
                                            onChange={(e) => setClientId(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Journey ID</label>
                                        <input
                                            className="form-control"
                                            value={journey_id}
                                            onChange={(e) => setJourneyId(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label>Costo del Ticket</label>
                                        <input
                                            className="form-control"
                                            value={costoTicket}
                                            onChange={(e) => setCostoTicket(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Asiento</label>
                                        <input
                                            className="form-control"
                                            value={asiento}
                                            onChange={(e) => setAsiento(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Nombre del Cliente</label>
                                    <input
                                        className="form-control"
                                        value={nombreCliente}
                                        onChange={(e) => setNombreCliente(e.target.value)}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to="/admin/ticket" className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear Ticket</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTi;
