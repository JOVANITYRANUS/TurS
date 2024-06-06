import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";

const ListGui = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh"
        },
    };
    
    const [guides, setGuides] = useState();

    useEffect(() => {
        getGuideAll();
    }, []);

    const getGuideAll = async () => {
        try {
            const response = await Config.getGuideAll();
            setGuides(response.data);
        } catch (error) {
            console.error("Error fetching guides", error);
        }
    };

    const deleteGuideById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este guía?");
        if (isDelete) {
            try {
                await Config.getGuideDeleteById(id);
                getGuideAll();
            } catch (error) {
                console.error("Error deleting guide", error);
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
                            <Link to={"/admin/guide/create"} className="btn btn-primary">
                                Agregar Guía
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ORDEN</th>
                                        <th>Matrícula</th>
                                        <th>Nombre</th>
                                        <th>ACCION</th>
                                        <th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!guides ? (
                                        <tr>
                                            <td colSpan="5">Cargando...</td>
                                        </tr>
                                    ) : (
                                        guides.map((guide) => (
                                            <tr key={guide.id}>
                                                <td>{guide.id}</td>
                                                <td>{guide.matricula}</td>
                                                <td>{guide.nombre}</td>
                                                <td>
                                                    <Link to={`/admin/guide/edit/${guide.id}`} className="btn btn-primary">
                                                        EDITAR
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => deleteGuideById(guide.id)}>
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

export default ListGui;
