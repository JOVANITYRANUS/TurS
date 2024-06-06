import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from '../../pageadmin/Sidebar';
import { Link } from "react-router-dom";
import * as XLSX from 'xlsx';

const ListC = () => {
    const [clients, setClients] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [journeys, setJourneys] = useState([]);

    useEffect(() => {
        getClients();
        getTickets();
        getRoutes();
        fetchJourneys();
    }, []);

    const getClients = async () => {
        try {
            const response = await Config.getClientAlll();
            setClients(response.data);
        } catch (error) {
            console.error("Error fetching clients", error);
        }
    };

    const getTickets = async () => {
        try {
            const response = await Config.getTickAll();
            setTickets(response.data);
        } catch (error) {
            console.error("Error fetching tickets", error);
        }
    };

    const getRoutes = async () => {
        try {
            const response = await Config.getRouteAll();
            setRoutes(response.data);
        } catch (error) {
            console.error("Error fetching routes", error);
        }
    };

    const fetchJourneys = async () => {
        try {
            const response = await Config.getJourAll();
            setJourneys(response.data);
        } catch (error) {
            console.error("Error fetching journeys:", error);
        }
    }; 

    const deleteClientById = async (id) => {
        const isDelete = window.confirm("¿Deseas borrar este cliente?");
        if (isDelete) {
            try {
                await Config.getClientDeleteById(id);
                getClients();
            } catch (error) {
                console.error("Error deleting client", error);
            }
        }
    };

    const exportToExcel = () => {
        const clientTickets = clients.map(client => {
            const clientTicketsData = tickets.filter(ticket => ticket.client_id === client.id);
            const clientTicketsWithRoutes = clientTicketsData.map(ticket => {
                const journey = journeys.find(journey => journey.id === ticket.journey_id);
                const route = routes.find(route => route.id === journey.route_id);
                return {
                    ...ticket,
                    route: route.nombreRoute,
                    fechaInicio: route.fechaInicio,
                    fechaTerminacion: route.fechaTerminacion,
                    distanciaRoute: route.distanciaRoute,
                    descripcion: route.descripcion
                };
            });
            return {
                ...client,
                tickets: clientTicketsWithRoutes
            };
        });

        const flattenedData = clientTickets.flatMap(client => client.tickets.map(ticket => ({
            "ID Cliente": client.id,
            "Nombre Cliente": client.nombre,
            "Email Cliente": client.email,
            "Teléfono Cliente": client.telefono,
            "RFC Cliente": client.RFC,
            "ID Ticket": ticket.id,
            "ID Viaje": ticket.journey_id,
            "Costo Ticket": ticket.costoTicket,
            "Asiento": ticket.asiento,
            "Nombre Cliente en Ticket": ticket.nombreCliente,
            "Ruta": ticket.route,
            "Fecha de Inicio": ticket.fechaInicio,
            "Fecha de Terminación": ticket.fechaTerminacion,
            "Distancia de la Ruta": ticket.distanciaRoute,
            "Descripción de la Ruta": ticket.descripcion
        })));

        const worksheet = XLSX.utils.json_to_sheet(flattenedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Clientes y Tickets");
        XLSX.writeFile(workbook, "ClientesConTickets.xlsx");
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <Link to={"/admin/clientc"} className="btn btn-primary">
                                Agregar Cliente
                            </Link>
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>RFC</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!clients.length ? (
                                        <tr>
                                            <td colSpan="6">Cargando...</td>
                                        </tr>
                                    ) : (
                                        clients.map((client) => (
                                            <tr key={client.id}>
                                                <td>{client.id}</td>
                                                <td>{client.nombre}</td>
                                                <td>{client.email}</td>
                                                <td>{client.telefono}</td>
                                                <td>{client.RFC}</td>
                                                <td>
                                                    <Link to={`/admin/client/edit/${client.id}`} className="btn btn-primary">
                                                        Editar
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => deleteClientById(client.id)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                            <button onClick={exportToExcel} className="btn btn-success mt-3">Exportar a Excel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListC;
