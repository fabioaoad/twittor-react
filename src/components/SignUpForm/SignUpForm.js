import React, {useState} from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap"

import "./SignUpForm.scss"

export default function SignUpForm(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(iniciarFormValue());

  const onSubmit = e => {
        e.preventDefault();
        setShowModal(false);
        console.log(formData)
    };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

    return(
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                              type="text"
                              placeholder="Nombre"
                              name="nombre"
                              defaultValue={formData.nombre}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                              type="text"
                              placeholder="Apellidos"
                              name="apellidos"
                              defaultValue={formData.apellidos}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Correo Electrónico"
                      name="email"
                      defaultValue={formData.email}
                    />
                </Form.Group>


                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                              type="password"
                              placeholder="Contraseña"
                              name="password"
                              defaultValue={formData.password}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                              type="password"
                              placeholder="Repetir Contraseña"
                              name="repetPassword"
                              defaultValue={formData.repetPassword}
                            />
                        </Col>
                    </Row>
                </Form.Group>


              <Button variant="primary" type="submit">
                  Registrarse
              </Button>
            </Form>
        </div>
    )
}


function iniciarFormValue(){
  return{
    nombre:"",
    apellidos:"",
    email:"",
    password:"",
    repetPassword:""
  };
}
