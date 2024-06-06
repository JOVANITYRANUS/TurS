import React from "react";
import Sidebar from "./Sidebar";

const PanelAdmin = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            height: "90vh" 
        },
    }
    return(
        <div className="container bg-ligth">
            <div className='row justify-content-center mt-5 mb-5'>
            <Sidebar/>
            <div className="col-sm-9">
                <h1 className="text-center">ADMIN</h1>
            </div>
        </div>
        </div>
    )
}

export default PanelAdmin