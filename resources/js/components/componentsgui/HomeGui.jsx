import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeGui = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    };

    const [matricula, setMatricula] = useState('');
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const submitStore = async (e) => {
        e.preventDefault();
        try {
            await Config.getGuideStore({ matricula, nombre });
            navigate('/admin/guide');
        } catch (error) {
            console.error("Error creating guide", error);
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
                                    <div className="col-sm-8">
                                        <label>Matrícula</label>
                                        <input
                                            className="form-control"
                                            value={matricula}
                                            onChange={(e) => setMatricula(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-8 mt-3">
                                        <label>Nombre</label>
                                        <input
                                            className="form-control"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear guía</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeGui;
