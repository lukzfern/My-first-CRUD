import React, { useState } from "react";
import Typography from "../components/typography/Typography";
import TablaJugador from "../components/TablaJugador";

const listaTotalJugadores = [
    {
        "id": 1,
        "nombre": "Lucas",
        "puntos": 1000,
    },
    {
        "id": 2,
        "nombre": "John",
        "puntos": 500,
    },
    {
        "id": 3,
        "nombre": "Java",
        "puntos": 250,
    }
]

const Jugador = () => {

    const [listaJugadores, setListaJugadores] = useState(listaTotalJugadores);

    return(
        <>
            <Typography>Lista de Jugadores</Typography>
            <TablaJugador 
                data={listaJugadores}
            />
        </>
    )
}

export default Jugador;