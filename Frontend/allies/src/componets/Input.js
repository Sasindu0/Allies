import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import "./input.css";

const baseUrl = "http://127.0.0.1:8000";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

let result;

//Updated

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="output-box">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Centered-model">
          <h4>{result}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="close-button">
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

const Input = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getRequest = async () => {
    const { data } = await axios.post(`${baseUrl}/home/`, {
      amt: inputs.amt,
      trans_hour: inputs.trans_hour,
      category: inputs.category,
      genderMale: inputs.gender_male,
      day: inputs.day,
      age: inputs.age,
    });

    result = data;

    console.log(data);

    setModalShow(true);
  };

  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const handleMaleCheck = () => {
    setMaleChecked(true);
    setFemaleChecked(false);
  };

  const handleFemaleCheck = () => {
    setMaleChecked(false);
    setFemaleChecked(true);
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;

    if (isNaN(inputValue)) {
      alert("Please enter a valid numerical value for Amount");
      // You can also clear the input field or set it to a default value
      // e.target.value = '';
    }
  };

  return (
    <div className="dark-background">
      <>
        <Container fluid>
          <>
            <Container>
              <br></br>
              <>
                <Row className="mb-3">
                  <InputGroup size="lg">
                    <InputGroup.Text
                      className="labels"
                      id="inputGroup-sizing-lg"
                    >
                      Amount
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-lg" // You had "inputGroup-sizing-sm" here, should be "lg" to match the input size
                      className="input-space"
                      type="number"
                      name="amt"
                      value={inputs.amt || ""}
                      onChange={handleChange}
                      onBlur={handleBlur} // Add the onBlur event handler
                    />
                  </InputGroup>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <InputGroup size="lg">
                      <InputGroup.Text
                        className="labels"
                        id="inputGroup-sizing-lg"
                      >
                        Transaction hour
                      </InputGroup.Text>
                      <Form.Select
                        type="number"
                        name="trans_hour"
                        value={inputs.trans_hour || ""}
                        onChange={handleChange}
                        size="lg"
                        className="input-space"
                      >
                        <option placeholder="Select the category"></option>

                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">00</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>

                  <Col>
                    <InputGroup size="lg">
                      <InputGroup.Text
                        className="labels"
                        id="inputGroup-sizing-lg"
                      >
                        Category
                      </InputGroup.Text>

                      <Form.Select
                        type="number"
                        name="category"
                        value={inputs.category || ""}
                        onChange={handleChange}
                        size="lg"
                        className="input-space"
                      >
                        <option placeholder="Select the category"></option>
                        {/* start with 0th index */}
                        <option value="1">entertainment</option>
                        <option value="2">Food dining</option>
                        <option value="3">Gas transport</option>
                        <option value="4">Grocery net</option>
                        <option value="5">Grocery pos</option>
                        <option value="6">Health fitness</option>
                        <option value="7">Home</option>
                        <option value="8">Kids pets</option>
                        <option value="9">Misc net</option>
                        <option value="10">Misc pos</option>
                        <option value="11">Personal care</option>
                        <option value="12">Shopping net</option>
                        <option value="13">Shopping pos</option>
                        <option value="14">travel</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <InputGroup size="lg">
                      <InputGroup.Text
                        className="labels"
                        id="inputGroup-sizing-lg"
                      >
                        Gender
                      </InputGroup.Text>

                      <div className="gender-border p-3 ">
                        <div className="form-check form-check-inline">
                          <Form.Check
                            name="gender_male"
                            value={(inputs.gender_male = maleChecked)}
                            type="checkbox"
                            label="Male"
                            checked={maleChecked}
                            onChange={(e) => {
                              handleChange(e);
                              handleMaleCheck();
                            }}
                          />
                        </div>
                        <div className="form-check form-check-inline">
                          <Form.Check
                            type="checkbox"
                            label="Female"
                            checked={femaleChecked}
                            onChange={handleFemaleCheck}
                          />
                        </div>
                      </div>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <InputGroup size="lg">
                      <InputGroup.Text
                        className="labels"
                        id="inputGroup-sizing-lg"
                      >
                        Day
                      </InputGroup.Text>
                      <Form.Select
                        type="number"
                        name="day"
                        value={inputs.day || ""}
                        onChange={handleChange}
                        size="lg"
                        className="input-space"
                      >
                        <option className="h4"></option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                        <option value="7">Sunday</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <InputGroup size="lg">
                      <InputGroup.Text
                        className="labels"
                        id="inputGroup-sizing-lg"
                      >
                        Age
                      </InputGroup.Text>

                      <Form.Select
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                        size="lg"
                        className="input-space"
                      >
                        <option className="h4"></option>
                        <option value="1">&lt; 31</option>
                        <option value="2">31-45</option>
                        <option value="3">46-60</option>
                        <option value="4">61-75</option>
                        <option value="5">75 &lt;</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Col className="text-end">
                    <Button
                      onClick={() => {
                        getRequest();
                      }}
                      variant="primary"
                      type="submit"
                      className="print-button"
                    >
                      Check
                    </Button>
                  </Col>
                </Row>
              </>
            </Container>

            <MyVerticallyCenteredModal
              onChange={handleBlur}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        </Container>
      </>
    </div>
  );
};

export default Input;
