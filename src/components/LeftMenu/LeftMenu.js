import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser, faUsers, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Logowhite from "../../assets/png/logo-white.png";
import TweetModal from "../Modal/TweetModal";
import { logoutApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";

import "./LeftMenu.scss"

export default function LeftMenu(props){
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  const user = useAuth();
  //console.log(user);
  const logout = () => {
    logoutApi();
    setRefreshCheckLogin(true);
  }
  return (
    <div className="left-menu">
      <img className="logo" src={Logowhite} alt="Twittor"/>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Inicio
      </Link>

      <Link to="/user">
        <FontAwesomeIcon icon={faUsers} /> Usuarios
      </Link>

      <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUser} /> Perfil
      </Link>

      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión
      </Link>

      <Button onClick={() => setShowModal(true)}>Twitear</Button>

      <TweetModal show={showModal} setShow={setShowModal} />
    </div>
  );
}
