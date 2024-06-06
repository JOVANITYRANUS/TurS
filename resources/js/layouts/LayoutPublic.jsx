import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {

    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            height: "90vh" 
        },
    }

    return(
        <>
        <h1></h1>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default LayoutPublic