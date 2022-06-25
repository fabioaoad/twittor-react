import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser, faUsers, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Logowhite from "../../assets/png/logo-white.png"

import "./LeftMenu.scss"

export default function LeftMenu(){
  return (
    <div className="left-menu">
      <img className="logo" src={Logowhite} alt="Twittor"/>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Inicio
      </Link>

      <Link to="/user">
        <FontAwesomeIcon icon={faUsers} /> Usuarios
      </Link>

      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} /> Perfil
      </Link>

      <Link to="/logout">
        <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión
      </Link>

      <Button>Twitear</Button>
    </div>
  );
}
