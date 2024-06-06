import React, { useState, useEffect } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";

const HomeDTr = () => {
    const [driver_id, setDriverId] = useState('');
    const [transport_id, setTransportId] = useState('');
    const [drivers, setDrivers] = useState([]);
    const [transports, setTransports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllDrivers();
        getAllTransports();
    }, []);

    const getAllDrivers = async () => {
        try {
            const response = await Config.getDriverAll();
            setDrivers(response.data);
        } catch (error) {
            console.error("Error fetching drivers", error);
        }
    };

    const getAllTransports = async () => {
        try {
            const response = await Config.getTransportAll();
            setTransports(response.data);
        } catch (error) {
            console.error("Error fetching transports", error);
        }
    };

    const submitStore = async (e) => {
        e.preventDefault();
        try {
            // Verificar que driver_id y transport_id estén definidos y tengan valores válidos
            if (!driver_id || !transport_id) {
                throw new Error("Por favor selecciona un conductor y un transporte.");
            }
            // Enviar la solicitud de almacenamiento
            await Config.getTransStore({ driver_id, transport_id });
            // Navegar a la página de driver_transport después de guardar
            navigate('/admin/drivtrans');
        } catch (error) {
            console.error("Error al enviar la solicitud de almacenamiento:", error);
            // Manejar el error de acuerdo a tus necesidades (por ejemplo, mostrar un mensaje de error al usuario)
        }
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
                                        <label>Driver</label>
                                        <select
                                            className="form-control"
                                            value={driver_id}
                                            onChange={(e) => setDriverId(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Driver</option>
                                            {drivers.map((driver) => (
                                                <option key={driver.id} value={driver.id}>
                                                    {driver.id}
                                                </option>
                                            ))}
                                        </select>
                                        {driver_id && (
                                            <div className="mt-2">
                                                <strong>Driver Name:</strong> {drivers.find(d => d.id === driver_id)?.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Transport</label>
                                        <select
                                            className="form-control"
                                            value={transport_id}
                                            onChange={(e) => setTransportId(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Transport</option>
                                            {transports.map((transport) => (
                                                <option key={transport.id} value={transport.id}>
                                                    {transport.id}
                                                </option>
                                            ))}
                                        </select>
                                        {transport_id && (
                                            <div className="mt-2">
                                                <strong>Transport Model:</strong> {transports.find(t => t.id === transport_id)?.modelo}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Create Driver Transport</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDTr;
