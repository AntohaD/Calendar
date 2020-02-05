import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TimeData, EventData } from '../../Data/';
import Convert from '../../Helpers/Convert';


import './TimeModal.scss';

function TimeModal(props) {
  const [description, setDescription] = useState('');
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  function addEvent(e) {
    e.preventDefault();
    setDescription(document.getElementById('description').value);
    setStartHours(parseInt(document.getElementById('startHours').value));
    setStartMinutes(parseInt(document.getElementById('startMinutes').value));
    setEndHours(parseInt(document.getElementById('endHours').value));
    setEndMinutes(parseInt(document.getElementById('endMinutes').value));

    props.onHide();     
  };

  useEffect(() => {
    setDescription(description);
    setStartHours(startHours);
    setStartMinutes(startMinutes);
    setEndHours(endHours);
    setEndMinutes(endMinutes);

    setStartTime(Convert.convertHours(startHours));
    setEndTime(Convert.convertHours(endHours));

    addDate(startTime, endTime);

  },[description, startHours, startMinutes, endHours, endMinutes, startTime, endTime]);

  function addDate(startTime, endTime) {
    if (endTime > 0) {
      EventData.event.push({
        id: 1234,
        startTime: startTime,
        endTime: endTime,
        text: description,
        index: 1
      });
    }

    console.log(EventData.event);
  }

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