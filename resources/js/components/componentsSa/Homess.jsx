import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';

const Homess = () => {
    const [routeId, setRouteId] = useState('');
    const [guideId, setGuideId] = useState('');
    const [driverId, setDriverId] = useState('');
    const [transportId, setTransportId] = useState('');
    const [fecha, setFecha] = useState('');
    const [cupo, setCupo] = useState('');
    const [status, setStatus] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [horaLlegada, setHoraLlegada] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Config.getJourStore({
                route_id: routeId,
                guide_id: guideId,
                driver_id: driverId,
                transport_id: transportId,
                fecha: fecha,
                cupo: cupo,
                status: status,
                hora_salida: horaSalida,
                hora_llegada: horaLlegada
            });
            navigate('/admin/journey');
        } catch (error) {
            console.error("Error creating sale:", error);
        }
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Route ID</label>
                                    <input
                                        className="form-control"
                                        value={routeId}
                                        onChange={(e) => setRouteId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Guide ID</label>
                                    <input
                                        className="form-control"
                                        value={guideId}
                                        onChange={(e) => setGuideId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Driver ID</label>
                                    <input
                                        className="form-control"
                                        value={driverId}
                                        onChange={(e) => setDriverId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Transport ID</label>
                                    <input
                                        className="form-control"
                                        value={transportId}
                                        onChange={(e) => setTransportId(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Fecha</label>
                                    <input
                                        className="form-control"
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        type="date"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Cupo</label>
                                    <input
                                        className="form-control"
                                        value={cupo}
                                        onChange={(e) => setCupo(e.target.value)}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input
                                        className="form-control"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Hora de Salida</label>
                                    <input
                                        className="form-control"
                                        value={horaSalida}
                                        onChange={(e) => setHoraSalida(e.target.value)}
                                        type="time"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Hora de Llegada</label>
                                    <input
                                        className="form-control"
                                        value={horaLlegada}
                                        onChange={(e) => setHoraLlegada(e.target.value)}
                                        type="time"
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to="/admin/journey" className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Create Sale</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homess;
