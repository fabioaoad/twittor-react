import React from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";
import { withRouter } from "react-router-dom";

import "./User.scss"


function User(props){
  //console.log(props);
  const { match } = props;
  console.log(match.params.id);
  return(
    <BasicLayout className="user">
      <div className="user__title">
        <h2>Fabio Martin Aoad</h2>
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
