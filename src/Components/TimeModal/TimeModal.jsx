import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import GeneralActions from "../../store/actions/general/actions";
import DataService from '../../services/DataService';
import { TimeData, EventData } from '../../Data/';


import './TimeModal.scss';

function TimeModal(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => ({ general: state.general }));

  // const [description, setDescription] = useState('');
  // const [startHours, setStartHours] = useState(0);
  // const [startMinutes, setStartMinutes] = useState(0);
  // const [endHours, setEndHours] = useState(0);
  // const [endMinutes, setEndMinutes] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [selectId, setSelectId] = useState(state.general.selectEvent);
  const [event, setEvent] = useState([]);

  console.log(event);

  function addEvent() {
    const description = document.getElementById('description').value;
    const startHours = parseInt(document.getElementById('startHours').value);
    const startMinutes = parseInt(document.getElementById('startMinutes').value);
    const endHours = parseInt(document.getElementById('endHours').value);
    const endMinutes = parseInt(document.getElementById('endMinutes').value);

    dispatch(
      GeneralActions.getInputValue(
        description,
        startHours,
        startMinutes,
        endHours,
        endMinutes
      )
    );

    props.onHide();
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
          <Form.Group>
          <Form.Label>Hours</Form.Label>
            <Form.Control
              as="select"
              md="4"
              id="startHours"
            >
              {TimeData.time.map(time => {
                return (
                  <option key={time.time}>{time.time}</option>
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
                return <option key={minute}>{minute}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Label>End event</Form.Label>
        <Form.Row>
          <Form.Group>
          <Form.Label>Hours</Form.Label>
            <Form.Control
              as="select"
              md="4"
              id="endHours"
            >
              {TimeData.time.map(time => {
                return <option key={time.time}>{time.time}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label>Minutes</Form.Label>
            <Form.Control 
              as="select"
              md="4"
              id="endMinutes"
              // value={45}
            >
              {TimeData.minutes.map(minute => {
                return <option key={minute}>{minute}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Event description</Form.Label>
          <Form.Control 
            as="textarea"
            rows="2"
            id="description"
            placeholder="Event description"
            // value={'text'}
            // onChange={}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => addEvent()}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TimeModal;