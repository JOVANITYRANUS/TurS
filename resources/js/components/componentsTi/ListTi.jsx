import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';

const ListTi = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(to bottom, #001f3f, #FF5733)",
            height: "90vh" 
        },
    };

    const [tickets, setTickets] = useState();

    useEffect(() => {
        getTicketAll();
    }, []);

    const getTicketAll = async () => {
        try {
            const response = await Config.getTickAll();
            setTickets(response.data);
        } catch (error) {
            console.error("Error fetching tickets", error);
        }
    };

    const deleteTicketById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este ticket?");
        if (isDelete) {
            try {
                await Config.getTickDeleteById(id);
                getTicketAll();
            } catch (error) {
                console.error("Error deleting ticket", error);
            }
        }
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Cliente ID</th>
                                        <th>Journey ID</th>
                                        <th>Costo del Ticket</th>
                                        <th>Asiento</th>
                                        <th>Nombre del Cliente</th>
                                        <th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!tickets ? (
                                        <tr>
                                            <td colSpan="7">Cargando...</td>
                                        </tr>
                                    ) : (
                                        tickets.map((ticket) => (
                                            <tr key={ticket.id}>
                                                <td>{ticket.id}</td>
                                                <td>{ticket.client_id}</td>
                                                <td>{ticket.journey_id}</td>
                                                <td>{ticket.costoTicket}</td>
                                                <td>{ticket.asiento}</td>
                                                <td>{ticket.nombreCliente}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => deleteTicketById(ticket.id)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListTi;
