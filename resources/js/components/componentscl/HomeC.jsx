import React, { useState } from "react";
import Sidebar from '../../pageadmin/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Config from "../../Config";

const HomeC = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    }

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [RFC, setRFC] = useState('');
    const navigate = useNavigate();

    const submitStore = async (e) => {
        e.preventDefault();
        try {
            await Config.getCliStore({ nombre, email, telefono, RFC });
            navigate('/admin/cliente');
        } catch (error) {
            console.error('Error creating client:', error);
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
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mt-3">
                                    <div className="col-sm-6">
                                        <label>Teléfono</label>
                                        <input
                                            className="form-control"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>RFC</label>
                                        <input
                                            className="form-control"
                                            value={RFC}
                                            onChange={(e) => setRFC(e.target.value)}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Back</Link>
                                    <button type="submit" className="btn btn-primary">Crear cliente</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeC;
