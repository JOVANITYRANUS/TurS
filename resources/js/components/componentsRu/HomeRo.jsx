import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeRo = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    }

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaTerminacion, setFechaTerminacion] = useState('');
    const [numParadas, setNumParadas] = useState('');
    const [nombreRoute, setNombreRoute] = useState('');
    const [distanciaRoute, setDistanciaRoute] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    const submitStore = async (e) => {
        e.preventDefault();
        try {
            const data = {
                fechaInicio,
                fechaTerminacion,
                numParadas,
                nombreRoute,
                distanciaRoute,
                descripcion
            };
            await Config.getRouteStore(data);
            navigate('/admin/route');
        } catch (error) {
            console.error("Error creating route:", error);
        }
    }

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitStore}>
                                <div className="form-group row">
                                    <div className="col-sm-4">
                                        <label>Fecha de inicio</label>
                                        <input
                                            className="form-control"
                                            value={fechaInicio}
                                            onChange={(e) => setFechaInicio(e.target.value)}
                                            type="date"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Fecha de terminación</label>
                                        <input
                                            className="form-control"
                                            value={fechaTerminacion}
                                            onChange={(e) => setFechaTerminacion(e.target.value)}
                                            type="date"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Número de paradas</label>
                                        <input
                                            className="form-control"
                                            value={numParadas}
                                            onChange={(e) => setNumParadas(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label>Nombre de la ruta</label>
                                        <input
                                            className="form-control"
                                            value={nombreRoute}
                                            onChange={(e) => setNombreRoute(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Distancia de la ruta (km)</label>
                                        <input
                                            className="form-control"
                                            value={distanciaRoute}
                                            onChange={(e) => setDistanciaRoute(e.target.value)}
                                            type="number"
                                            step="0.01"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea
                                        className="form-control"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        rows="3"
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear ruta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeRo;
