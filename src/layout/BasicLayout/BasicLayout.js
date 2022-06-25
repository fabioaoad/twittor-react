import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftMenu from "../../components/LeftMenu";

import "./BasicLayout.scss"

export default function BasicLayout(props) {
  const { className, children } = props;
  return (
    <Container className= {`basic-layout ${className}`}>
      <Row>
        <Col xc={3} className="basic-layout__menu">
          <LeftMenu></LeftMenu>
        </Col>
        <Col xs={9} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  )
}
