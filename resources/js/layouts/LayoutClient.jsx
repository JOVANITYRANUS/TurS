import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from 'react-router-dom';
import AuthUser from "../pageauth/AuthUser";
 

const LayoutClient = () => {

    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    }
    const { getRol } = AuthUser()
    const navigate = useNavigate ()

    useEffect(()=>{
        if(getRol()!="client"){
            navigate("/")
        }
    },[])
    return(
        <div>
            <h1>CLiente</h1>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutClient