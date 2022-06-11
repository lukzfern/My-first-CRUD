import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const FormJugador = (props) => {

    const { handleSubmit, validated, setNombre, setPuntos } = props;

    return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="nombre"
            placeholder="Nombre del Jugador"
            onChange={(event) =>  {setNombre(event.target.value)}}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Puntos</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Puntos"
            onChange={(event) => {setPuntos(event.target.value)}}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>

      </Row>
    </Form>
    )
}

export default FormJugador;