import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormJugador from "./FormJugador";

const ModalJugador = (props) => {

    const { handleSubmit, showModal, handleClose, validated, setNombre, setPuntos } = props;


    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Jugador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormJugador 
                handleSubmit={handleSubmit}
                validated={validated}
                setNombre={setNombre}
                setPuntos={setPuntos}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleSubmit}>Aceptar</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalJugador;