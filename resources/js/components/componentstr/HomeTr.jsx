import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeTr = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh"
        },
    };

    const [status, setStatus] = useState('');
    const [modelo, setModelo] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [marca, setMarca] = useState('');
    const [matricula, setMatricula] = useState('');
    const navigate = useNavigate();

    const submitTransport = async (e) => {
        e.preventDefault();
        await Config.getTransportStore({ status, modelo, capacidad, marca, matricula });
        navigate('/admin/transport');
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitTransport}>
                                <div className="form-group row">
                                    <div className="col-sm-4">
                                        <label>Status</label>
                                        <input
                                            className="form-control"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Modelo</label>
                                        <input
                                            className="form-control"
                                            value={modelo}
                                            onChange={(e) => setModelo(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Capacidad</label>
                                        <input
                                            className="form-control"
                                            value={capacidad}
                                            onChange={(e) => setCapacidad(e.target.value)}
                                            type="number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mt-3">
                                    <div className="col-sm-6">
                                        <label>Marca</label>
                                        <input
                                            className="form-control"
                                            value={marca}
                                            onChange={(e) => setMarca(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Matricula</label>
                                        <input
                                            className="form-control"
                                            value={matricula}
                                            onChange={(e) => setMatricula(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear Transporte</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTr;
