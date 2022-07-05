import React,{useState} from 'react';
import {Form, Button, Row, Col, FormGroup, FormControl} from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";

import "./EditUserForm.scss";

export default function EditUserForm(props){
  //console.log(props);
  const { user, setShowModal } = props;
  const [formData, setFormData] = useState(initialValue(user));

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };


  //console.log(user);
  const onSubmit = e => {
  e.preventDefault();
    console.log("Editando usuario...");
    console.log(formData);
  };

    return (
      <div className="edit-user-form">
        <Form onSubmit={onSubmit}>

          <Form.Group>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={formData.nombre} onChange={onChange} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Apellidos" name="apellidos" defaultValue={formData.apellidos} onChange={onChange} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
              <Form.Control as="textarea" row="3" placeholder="Agrega tu biografía" type="text" name="biografia" defaultValue={formData.biografia} onChange={onChange} />
          </Form.Group>

          <Form.Group>
              <Form.Control type="text" placeholder="Sitio Web" name="sitioWeb" defaultValue={formData.sitioWeb} onChange={onChange} />
          </Form.Group>

          <Form.Group>
            <DatePicker
              plac  eholder="Fecha de nacimiento"
              locale={es}
              selected={new Date(formData.fechaNacimiento)}
              onChange={value =>setFormData({ ...formData, fechaNacimiento: value})}
            />
          </Form.Group>

          <Button className="btn-submit" variant="primary" type="submit">
              Actualizar
          </Button>
        </Form>
      </div>
    );
}


function initialValue(user){
  return {
    nombre: user.nombre || "",
    apellidos: user.apellidos || "",
    biografia: user.biografia || "",
    ubicacion: user.ubicacion || "",
    sitioWeb: user.sitioWeb || "",
    fechaNacimiento: user.fechaNacimiento || ""
  };
}

