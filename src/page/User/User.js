import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import  { getUserApi } from "../../api/user";

import "./User.scss"


function User(props){
  //console.log(props);
  const { match } = props;
  const { params } = match
  const [user, setUser] = useState(null);
  //console.log(user);

  useEffect(() => {
    getUserApi(params.id).then(response => {
      setUser(response);
      if (!response){
        toast.error("El usuario que has visitado no existe");
      }
    }).catch(() => {
        toast.error("El usuario que has visitado no existe");
    })
  }, [params]);
  
  //console.log(match.params.id);

  return(
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          { user  ?  `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
        </h2>
      </div>
      <div>
        Banner Usuario
      </div>
      <div>
        Info Usuario
      </div>
      <div className="user__tweets">
        Lista Tweets
      </div>
    </BasicLayout>
  )
  }

export default withRouter(User);
