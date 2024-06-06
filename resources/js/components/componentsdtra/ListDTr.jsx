import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";

const ListDTr = () => {
    const [driverTransports, setDriverTransports] = useState([]);

    useEffect(() => {
        getDriverTransports();
    }, []);

    const getDriverTransports = async () => {
        try {
            const response = await Config.getTransAll();
            setDriverTransports(response.data);
        
        } catch (error) {
            console.error("Error creating trans", error);
        }
    };

    const deleteDriverTransport = async (driver_id, transport_id) => {
        const isDelete = window.confirm("¿Deseas borrar esta relación?");
        if (isDelete) {
            try {
                await Config.getdriTransDelete(driver_id, transport_id);
                getDriverTransports();
            } catch (error) {
                console.error("Error deleting driver transport", error);
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
                            <Link to={"/admin/drivtrans/create"} className="btn btn-primary">
                                Agregar Relación
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Driver ID</th>
                                        <th>Transport ID</th>
                                        <th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!driverTransports.length ? (
                                        <tr>
                                            <td colSpan="3">Cargando...</td>
                                        </tr>
                                    ) : (
                                        driverTransports.map((dt) => (
                                            <tr key={`${dt.driver_id}-${dt.transport_id}`}>
                                                <td>{dt.driver_id}</td>
                                                <td>{dt.transport_id}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => deleteDriverTransport(dt.driver_id, dt.transport_id)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
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

export default ListDTr;
