import React from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const Navbar = () => {

    const {getRol ,getLogout, getToken } = AuthUser()

    const logoutUser =()=>{
        Config.getLogout()
        .then(response=>{
            getLogout(); 
        }).catch(error => {
            // Maneja los errores de logout
            console.error('Error during logout:', error);
        });
    }

    const renderLinks = () =>{
        if(getToken()){
            return(
                <>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: "#FFFFFF" }} href={`/${getRol() }`}>Administracion </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: "#FFFFFF" }} href="#" onClick={logoutUser}>Logout </a>
                </li>
                </>
            )
        }else {
            return(
                <>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: "#FFFFFF" }} href="/login">Login </a>
                </li>
                </>
            )
        }
    }

    return(
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#001f3f", color: "#ffffff" }}>
            <div className="container">
                <a className="navbar-brand" href="/" style={{ color: "#FFFFFF" }}>Agencia Turistica</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" style={{ color: "#ffffff" }}>Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        { renderLinks() }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
