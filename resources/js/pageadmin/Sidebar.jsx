import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            height: "90vh" 
        },
    }

    return(
     
            <div className="col-sm-3 pt-3 pb-3">
                <div className="list-group">
                
                <NavLink to={`/admin/cliente`} className={({isActive})=> (isActive ? "list-group-item active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de Clients</NavLink>
                    
                    <NavLink to={`/admin/clientc`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador Clientes</NavLink>
                    <NavLink to={`/admin/driver`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de conductores</NavLink>
                    <NavLink to={`/admin/drivec`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador conductores</NavLink>
                    <NavLink to={`/admin/guide`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de Guias</NavLink>
                    <NavLink to={`/admin/guidec`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador Guias</NavLink>
                    <NavLink to={`/admin/transport`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de Transportes</NavLink>
                    <NavLink to={`/admin/transportc`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador de Transportes</NavLink>
                    
                    <NavLink to={`/admin/journey`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de Viajes</NavLink>
                    <NavLink to={`/admin/journeyc`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador de viajes</NavLink>
                    
                    <NavLink to={`/admin/ticket`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Lista Actual de ticket</NavLink>
                    <NavLink to={`/admin/ticketc`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador Tickets</NavLink>

                    <NavLink to={`/admin/sale`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item") } style={{textAlign: 'left'}}>Lista Actual de Ventas</NavLink>
                    <NavLink to={`/admin/salec`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador Ventas</NavLink>

                    
                    <NavLink to={`/admin/route`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item") } style={{textAlign: 'left'}}>Lista Actual de rutas</NavLink>
                    <NavLink to={`/admin/routec`} className={({isActive})=> (isActive ? "list-group-item  active" : "list-group-item")} style={{textAlign: 'left'}}>Administrador rutas</NavLink>
</div>
            </div>

     
    )
}


export default Sidebar