import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";

const ListD = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh"
        },
    };

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        getDriverAll();
    }, []);

    const getDriverAll = async () => {
        try {
            const response = await Config.getDriverAll();
            setDrivers(response.data);
        } catch (error) {
            console.error("Error fetching drivers", error);
        }
    };

    const deleteDriverById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este conductor?");
        if (isDelete) {
            try {
                await Config.getDriverDeleteById(id);
                getDriverAll();
            } catch (error) {
                console.error("Error deleting driver", error);
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
                            <Link to={"/admin/drivec"} className="btn btn-primary">
                                Agregar Conductor
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ORDEN</th>
                                        <th>Nombre</th>
                                        <th>Status</th>
                                        <th>Matrícula Trabajador</th>
                                        <th>Turno</th>
                                        <th>Acción</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!drivers.length ? (
                                        <tr>
                                            <td colSpan="7">Cargando...</td>
                                        </tr>
                                    ) : (
                                        drivers.map((driver) => (
                                            <tr key={driver.id}>
                                                <td>{driver.id}</td>
                                                <td>{driver.nombre}</td>
                                                <td>{driver.status}</td>
                                                <td>{driver.matriculaTrabajador}</td>
                                                <td>{driver.turno}</td>
                                                <td>
                                                    <Link to={`/admin/driver/edit/${driver.id}`} className="btn btn-primary">
                                                        Editar
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteDriverById(driver.id)}>
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

export default ListD;
