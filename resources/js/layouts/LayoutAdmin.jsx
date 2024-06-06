import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from 'react-router-dom';
import AuthUser from "../pageauth/AuthUser";


const LayoutAdmin = () => {

    const { getRol } = AuthUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(getRol() !== "admin"){
            navigate("/")
        }
    },[])

    const styles = {
        container: {
            textAlign: "center",
            padding: "50px",
            height: "90vh",
            color: "#000000 "
        }
    };

    return (
        <div style={styles.container}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default LayoutAdmin;
