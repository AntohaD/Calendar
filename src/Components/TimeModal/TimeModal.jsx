import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TimeData } from '../../Data/';

import './TimeModal.scss';

function TimeModal(props) {

  function addEvent(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const startHours = document.getElementById('startHours').value;
    const startMinutes = document.getElementById('startMinutes').value;
    const endHours = document.getElementById('endHours').value;
    const endMinutes = document.getElementById('endMinutes').value;

    props.onHide();

    console.log(description, startHours, startMinutes, endHours, endMinutes);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Start event</Form.Label>
        <Form.Row>
          <Form.Group controlId="StartEvent">
          <Form.Label>Hours</Form.Label>
            <Form.Control
              as="select"
              md="4"
              id="startHours"
            >
              {TimeData.time.map(time => {
                return (
                  <option>{time.time}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label>Minutes</Form.Label>
            <Form.Control
              as="select"
              md="4"
              id="startMinutes"
            >
              {TimeData.minutes.map(minute => {
                return (
                  <option>{minute}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Label>End event</Form.Label>
        <Form.Row>
          <Form.Group controlId="EndEvent">
          <Form.Label>Hours</Form.Label>
            <Form.Control
              as="select"
              md="4"
              id="endHours"
            >
              {TimeData.time.map(time => {
                return (
                  <option>{time.time}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label>Minutes</Form.Label>
            <Form.Control 
              as="select"
              md="4"
              id="endMinutes"
            >
              {TimeData.minutes.map(minute => {
                return (
                  <option>{minute}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="Description">
          <Form.Label>Event description</Form.Label>
          <Form.Control 
            as="textarea"
            rows="2"
            id="description"
            placeholder="Event description"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e) => addEvent(e)}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TimeModal;