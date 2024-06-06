import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import ListDr from './ListD';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeD = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh"
        },
    };

    const [nombre, setNombre] = useState('');
    const [status, setStatus] = useState('');
    const [matriculaTrabajador, setMatriculaTrabajador] = useState('');
    const [turno, setTurno] = useState('');
    const navigate = useNavigate();

    const submitStore = async (e) => {
        e.preventDefault();
        await Config.getDriverStore({ nombre, status, matriculaTrabajador, turno });
        navigate('/admin/driver');
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
                                        <label>Nombre</label>
                                        <input
                                            className="form-control"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Status</label>
                                        <input
                                            className="form-control"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mt-3">
                                    <div className="col-sm-6">
                                        <label>Matrícula del Trabajador</label>
                                        <input
                                            className="form-control"
                                            value={matriculaTrabajador}
                                            onChange={(e) => setMatriculaTrabajador(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Turno</label>
                                        <input
                                            className="form-control"
                                            value={turno}
                                            onChange={(e) => setTurno(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear Conductor</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeD;
