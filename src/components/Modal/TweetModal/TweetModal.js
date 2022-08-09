import React, { useState } from 'react';
import { Modal, Form, Button } from "react-bootstrap";
import classNames from "classnames";
import { Close } from "../../../utils/Icons";
import "./TweetModal.scss";

export default function TweetModal(props){
  const { show, setShow } = props;
  const [message, setMessage] = useState("");

  const maxLength = 280;

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log('Enviando tweet!!!');
    console.log(message);
  }

  return (
    <Modal
      className="tweet-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >

      <Modal.Header>
        <Modal.Title>
          <Close onClick={() => setShow(false)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Control
            as="textarea"
            rows="6"
            placeholder="¿Qué está pensando?"
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className={classNames("count", { error: message.length > maxLength })}>
            {message.length}
          </span>
          <Button
            type="submit"
            disabled={message.length > maxLength || message.length < 1}
          >
            Tweetear
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
