import React, {useState} from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap"
import { values, size } from "lodash";
import { toast } from "react-toastify";
import {isEmailValid } from "../../utils/validations"

import "./SignUpForm.scss"

export default function SignUpForm(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(iniciarFormValue());

  const onSubmit = e => {
        e.preventDefault();
       // console.log(formData);
        let validCount = 0;
        values(formData).some(value => {
          value && validCount++
          return null
        });

      //  console.log(validCount);
       // console.log(size(formData));

        if (validCount !== size(formData)){
          toast.warning("Completa todos los campos del formulario")
        } else {
          if (!isEmailValid(formData.email)){
          toast.warning("Email invalido")
          }
          else if (formData.password !== formData.repetPassword){
            toast.warning("Las contraseñas tienen que ser iguales")
          }
          else if(size(formData.password) < 6 ){
            toast.warning("La contraseña tiene que tener al menos 6 caracteres")
          }
          else {
            toast.success("Formulario OK.")
          }
        }


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
