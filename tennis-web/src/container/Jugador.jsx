import React, { useState } from "react";
import Typography from "../components/typography/Typography";
import TablaJugador from "../components/TablaJugador";
import { Button } from "react-bootstrap";
import ModalJugador from "../components/ModalJugador";

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
    const [showModal, setShowModal] = useState(false);
    const [puntos, setPuntos] = useState(0);
    const [nombre, setNombre] = useState('');
    const [validated, setValidated] = useState(false);

    const abrirModal = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const agregarJugador = () => {
        const idNuevo = listaJugadores.length + 1;
        const jugadorNuevo = {
            "id": idNuevo,
            "nombre": nombre,
            "puntos": puntos,
        }
        const nuevaListaJugadores = [...listaJugadores,jugadorNuevo];
        setListaJugadores(nuevaListaJugadores);
    }

    const handleSubmit = () => {
        if (nombre!=='') {
            agregarJugador();
            setValidated(true);
            setPuntos(0);
            setNombre('');
            handleClose()
        }
    }

    return(
        <>
            <Typography>Lista de Jugadores</Typography>
            <TablaJugador 
                data={listaJugadores}
            />
            <ModalJugador 
                handleSubmit={handleSubmit}
                showModal={showModal}
                handleClose={handleClose}
                validated={validated}
                setNombre={setNombre}
                setPuntos={setPuntos}
            />
            <Button onClick={abrirModal} variant="primary">Agregar</Button>{' '}
        </>
    )
}

export default Jugador;