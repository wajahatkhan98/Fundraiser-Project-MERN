import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import InvestorForm from '../components/forms/InvestorForm';
import LegalEntityForm from '../components/forms/LegalEntityForm';
import JTCEmployeeForm from '../components/forms/JTCEmployeeForm';
import { FORM_NAMES } from '../assets/constants';

const Registration = () => {
  const [formName, setFormName] = useState(
    FORM_NAMES.investor,
    FORM_NAMES.legalEntityInvestor
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    fatherName: '',
    motherName: '',
    email: '',
    passport: '',
    passportExpireDate: '',
    RFC: null,
    RFCType: 'Number',
    CURPType: 'Number',
    CURP: null,
    bankAccount: '',
    password: '',
    confirmPassword: '',
    hasFundsLegalSource: false,
    fundsLegalSource: null,
  });
  const [togglePassword, setTogglePassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onChangeHandler = (e) => {
    const { id, value, files } = e.currentTarget;

    console.log({ id, file: files?.[0], value });

    if (files) {
      // console.log('files',files[0])
      // setFormData.map()(prevState => ({...prevState, [id]: files[0].RFC}))
      setFormData((prevState) => ({ ...prevState, [id]: files[0] }));
    } else setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const onFormChangeHandler = (e) => setFormName(FORM_NAMES[e.target.value]);

  const passwordValidation = (password, confirmPassword) =>
    password === confirmPassword;
  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      //  setPreview({[e.target.name]: URL.createObjectURL(e.target.files[0])})
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    const { password, confirmPassword } = formData;

    const isValidPassword = passwordValidation(password, confirmPassword);

    if (!isValidPassword) {
      console.log(password, confirmPassword);
      return alert("Password Doesn't match");
    }

    console.log('JUNAID', formData);
  };

  return (
    <Container>
      <Row>
        <Col md={4} />
        <Col md={4}>
          {/* <Form.Group className="mb-3 custom-select">
            <Form.Select id="formName" onChange={onFormChangeHandler}>
              {Object.entries(FORM_NAMES).map(([key, name], index) => (
                <option key={index} value={key}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group> */}
        </Col>
      </Row>
      {(() => {
        if (formName === FORM_NAMES.investor) {
          return (
            <InvestorForm
              submitHandler={submitHandler}
              onChangeHandler={onChangeHandler}
              formData={formData}
              setFormData={setFormData}
              togglePassword={togglePassword}
              setTogglePassword={setTogglePassword}
            />
          );
        } else if (formName === FORM_NAMES.legalEntity) {
          return (
            <LegalEntityForm
              submitHandler={submitHandler}
              onChangeHandler={onChangeHandler}
              formData={formData}
              setFormData={setFormData}
              togglePassword={togglePassword}
              setTogglePassword={setTogglePassword}
            />
          );
        } else if (formName === FORM_NAMES.jtc) {
          return <JTCEmployeeForm />;
        }
      })()}
    </Container>
  );
};

export default Registration;
