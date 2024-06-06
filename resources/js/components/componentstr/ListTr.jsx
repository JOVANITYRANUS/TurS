import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";

const ListTr = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh"
        },
    };

    const [transports, setTransports] = useState();

    useEffect(() => {
        getTransportAll();
    }, []);

    const getTransportAll = async () => {
        try {
            const response = await Config.getTransportAll();
            setTransports(response.data);
        } catch (error) {
            console.error("Error fetching transports", error);
        }
    };

    const deleteTransportById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este transporte?");
        if (isDelete) {
            try {
                await Config.deleteTransportById(id);
                getTransportAll();
            } catch (error) {
                console.error("Error deleting transport", error);
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
                            <Link to={"/admin/transport/create"} className="btn btn-primary">
                                Agregar Transporte
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Status</th>
                                        <th>Modelo</th>
                                        <th>Capacidad</th>
                                        <th>Marca</th>
                                        <th>Matrícula</th>
                                        <th>Acción</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!transports ? (
                                        <tr>
                                            <td colSpan="8">Cargando...</td>
                                        </tr>
                                    ) : (
                                        transports.map((transport) => (
                                            <tr key={transport.id}>
                                                <td>{transport.id}</td>
                                                <td>{transport.status}</td>
                                                <td>{transport.modelo}</td>
                                                <td>{transport.capacidad}</td>
                                                <td>{transport.marca}</td>
                                                <td>{transport.matricula}</td>
                                                <td>
                                                    <Link to={`/admin/transport/edit/${transport.id}`} className="btn btn-primary">
                                                        Editar
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteTransportById(transport.id)}>
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

export default ListTr;
