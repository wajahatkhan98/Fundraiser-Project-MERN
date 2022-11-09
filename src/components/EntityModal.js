import { TextField } from '@mui/material';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Modal,
  Row,
  ToggleButton,
} from 'react-bootstrap';
import apis from '../services';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const EntityModal = ({ status, toggleModal }) => {
  const [shareAmount, setShareAmount] = useState();
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const navigate = useNavigate();

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  const handleSubmitInvestment = () => {};
  //   const investorHandler = () => navigate('/investor');
  //   const legalEntityInvestor = () => navigate('/legal-entity-investor');

  return (
    <Modal show={status} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Total Shares in pool (100000)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>Please Fill the Investment Share Amount:</Col>

          <Col xs={12} className="d-flex justify-content-start my-2 gap-2">
            <div
              style={{ display: 'flex', justifyContent: 'start' }}
              className="d-flex-container"
            >
              <TextField></TextField>
            </div>

            {/* <Button variant="outline-primary" onClick={investorHandler}>
              Investor
            </Button>
            <Button variant="outline-danger" onClick={legalEntityInvestor}>
              Legal Entity Investor
            </Button>
            <Button variant="outline-dark" onClick={toggleModal} disabled>
              JTC Employee Investor
            </Button> */}
          </Col>
        </Row>
      </Modal.Body>
      {/*<Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Proceed
                </Button>
            </Modal.Footer>*/}
    </Modal>
  );
};

export default EntityModal;
