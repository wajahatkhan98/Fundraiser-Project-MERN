import { Col, Form, Row } from "react-bootstrap";
import CustomTextField from "../ui/CustomTextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import {
  AccountBalance,
  Email,
  Person,
  PhoneInTalk,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import apis from "../../services";
import { Router, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import Loader from "../Loader";

const textFieldStyle = { color: "var(--primary-red)" };

const InvestorForm = ({
  submitHandler,
  togglePassword,
  setTogglePassword,
  formData,
  setFormData,
  onChangeHandler,
}) => {
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const toggle = (id) =>
    setTogglePassword((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      setLoading(true);

      let response = await apis
        .sendInvestorFormData({
          ...formData,
          type: "INVESTOR",
        })
        .then((data) => {
          setLoading(false);

          toast(`${data.data.massage}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/Login");
          }, 2000);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Some error occurred", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        <Row className="my-5">
          <Col md={4}>
            <CustomTextField
              id="name"
              label="Name"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="lastName"
              label="Last Name"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="phone"
              label="Phone Number"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneInTalk sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4}>
            <CustomTextField
              id="fatherName"
              label="Father Name"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="motherName"
              label="Mother Name"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="email"
              label="Email Address"
              type="email"
              variant="standard"
              onChange={onChangeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4}>
            <CustomTextField
              id="passport"
              label="Passport (INE,Passport, Immigration Form)"
              variant="standard"
              fullWidth
              required
              onChange={onChangeHandler}
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="passportExpireDate"
              type="date"
              variant="standard"
              label="Passport Expire Date"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
              onChange={onChangeHandler}
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="bankAccount"
              label="Bank Account No (Active in Mexico)"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBalance sx={textFieldStyle} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
              onChange={onChangeHandler}
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4}>
            <CustomTextField
              id="password"
              label="Password"
              type={togglePassword.password ? "text" : "password"}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => toggle("password")}>
                      {togglePassword.password ? (
                        <VisibilityOff sx={textFieldStyle} />
                      ) : (
                        <Visibility sx={textFieldStyle} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              onChange={onChangeHandler}
              required
            />
          </Col>
          <Col md={4}>
            <CustomTextField
              id="confirmPassword"
              label="Password Confirmation"
              type={togglePassword.confirmPassword ? "text" : "password"}
              onChange={onChangeHandler}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={textFieldStyle} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => toggle("confirmPassword")}
                    >
                      {togglePassword.confirmPassword ? (
                        <Visibility sx={textFieldStyle} />
                      ) : (
                        <VisibilityOff sx={textFieldStyle} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Have Letter of funds are from legal source?"
                checked={formData.hasFundsLegalSource}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    hasFundsLegalSource: e.target.checked,
                  }))
                }
              />
            </Form.Group>
            {formData.hasFundsLegalSource && (
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    id="fundsLegalSource"
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className="text-muted">
                    Please Upload the letter of source of funds
                  </Form.Text>
                </Form.Group>
              </Col>
            )}
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Check
                className="mb-3"
                inline
                label="RFC Number"
                value="Number"
                name="RFCType"
                type="radio"
                id="RFCType"
                onChange={onChangeHandler}
                checked={formData.RFCType === "Number"}
              />
              <Form.Check
                className="mb-3"
                inline
                label="RFC Document"
                value="Document"
                name="RFCType"
                type="radio"
                id="RFCType"
                onChange={onChangeHandler}
                checked={formData.RFCType === "Document"}
              />
              <Form.Control
                type="file"
                id="RFC"
                //  onChange={onChangeHandler}
                onChange={onChangeHandler}
                name="RFC"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Check
                className="mb-3"
                inline
                label="CURP Number"
                value="Number"
                name="CURPType"
                type="radio"
                id="CURPType"
                onChange={onChangeHandler}
                checked={formData.CURPType === "Number"}
              />
              <Form.Check
                className="mb-2"
                inline
                label="CURP Document"
                value="Document"
                name="CURPType"
                type="radio"
                id="CURPType"
                onChange={onChangeHandler}
                checked={formData.CURPType === "Document"}
              />
              {formData.CURPType === "Document" ? (
                <Form.Control
                  type="file"
                  id="CURP"
                  onChange={onChangeHandler}
                  required
                />
              ) : (
                <CustomTextField
                  id="CURP"
                  type={formData.CURPType === "Number" ? "text" : "file"}
                  variant="standard"
                  onChange={onChangeHandler}
                  required
                  fullWidth
                />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} />
          <Col md={4}>
            {loading ? (
              <Loader />
            ) : (
              <Button
                className="my-4"
                variant="outlined"
                color="error"
                fullWidth
                type="submit"
                disabled={loading}
              >
                Submit
              </Button>
            )}
          </Col>
        </Row>
      </Form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default InvestorForm;
