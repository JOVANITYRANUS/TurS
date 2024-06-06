import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
const Listss = () => {
    const [journeys, setJourneys] = useState(null);

    useEffect(() => {
        fetchJourneys();
    }, []);

    const fetchJourneys = async () => {
        try {
            const response = await Config.getJourAll();
            setJourneys(response.data);
        } catch (error) {
            console.error("Error fetching journeys:", error);
        }
    };

    const deleteJourneyById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este viaje?");
        if (isDelete) {
            try {
                await Config.getSalDelete(id);
                fetchJourneys();
            } catch (error) {
                console.error("Error deleting journey:", error);
            }
        }
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Route ID</th>
                                        <th>Guide ID</th>
                                        <th>Driver ID</th>
                                        <th>Transport ID</th>
                                        <th>Fecha</th>
                                        <th>Cupo</th>
                                        <th>Status</th>
                                        <th>Hora de Salida</th>
                                        <th>Hora de Llegada</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {journeys ? (
                                        journeys.map((journey) => (
                                            <tr key={journey.id}>
                                                <td>{journey.id}</td>
                                                <td>{journey.route_id}</td>
                                                <td>{journey.guide_id}</td>
                                                <td>{journey.driver_id}</td>
                                                <td>{journey.transport_id}</td>
                                                <td>{journey.fecha}</td>
                                                <td>{journey.cupo}</td>
                                                <td>{journey.status}</td>
                                                <td>{journey.hora_salida}</td>
                                                <td>{journey.hora_llegada}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => deleteJourneyById(journey.id)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="11">Cargando...</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listss;
