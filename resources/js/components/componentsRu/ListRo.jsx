import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";

const ListRo = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getRoutes();
    }, []);

    const getRoutes = async () => {
        try {
            const response = await Config.getRouteAll();
            setRoutes(response.data);
        } catch (error) {
            console.error("Error fetching routes", error);
        }
    };

    const deleteRouteById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar esta ruta?");
        if (isDelete) {
            try {
                await Config.getRouteDeleteById(id);
                getRoutes();
            } catch (error) {
                console.error("Error deleting route", error);
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
                                        <th>Fecha de Inicio</th>
                                        <th>Fecha de Terminación</th>
                                        <th>Número de Paradas</th>
                                        <th>Nombre de la Ruta</th>
                                        <th>Distancia de la Ruta (km)</th>
                                        <th>Descripción</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!routes.length ? (
                                        <tr>
                                            <td colSpan="8">No hay rutas disponibles</td>
                                        </tr>
                                    ) : (
                                        routes.map((route) => (
                                            <tr key={route.id}>
                                                <td>{route.id}</td>
                                                <td>{route.fechaInicio}</td>
                                                <td>{route.fechaTerminacion}</td>
                                                <td>{route.numParadas}</td>
                                                <td>{route.nombreRoute}</td>
                                                <td>{route.distanciaRoute}</td>
                                                <td>{route.descripcion}</td>
                                                <td>
                                                    <Link to={`/admin/route/edit/${route.id}`} className="btn btn-primary">
                                                        Editar
                                                    </Link>
                                                    <button className="btn btn-danger ml-2" onClick={() => deleteRouteById(route.id)}>
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

export default ListRo;
