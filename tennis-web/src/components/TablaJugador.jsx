import React from "react";
import { Table } from "react-bootstrap";

const TablaJugador = ( { data } ) => {
    
    const renderJugador = (jugador) => {
        const { id, nombre, puntos } = jugador;

        return (
              <tr key={id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{puntos}</td>
              </tr>
        )
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>Nombre</th>
                    <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
                {data.map(renderJugador)}
            </tbody>
        </Table>

    )
}

export default TablaJugador;