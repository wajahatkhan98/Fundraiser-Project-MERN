import {Button, Col, Container, Form, Row} from "react-bootstrap";

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'
import {useState} from "react";

/*Investor Form*/
const InvestorForm = () => {
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
        fundsLegalSource: null
    });

    const onChangeHandler = (e) => {
        const {id, value, files} = e.target;
        console.log({id, value, files});

        if (files)
            setFormData(prevState => ({...prevState, [id]: files[0]}))
        else
            setFormData(prevState => ({...prevState, [id]: value}))
    }

    const passwordValidation = (password, confirmPassword) => password === confirmPassword;

    const submitHandler = (e) => {
        e.preventDefault();

        const {password, confirmPassword} = formData;

        const isValidPassword = passwordValidation(password, confirmPassword);

        if (!isValidPassword)
            return alert('Password Doesn\'t match')

        console.log(formData)


    }

    return (
        <Container>
            <Form className='my-2' onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <h2 className='text-center text-uppercase my-5'>Investor Form</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" onChange={onChangeHandler} value={formData.firstName} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" onChange={onChangeHandler} value={formData.lastName} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="phoneNo">
                            <Form.Label>Phone Number</Form.Label>
                            <PhoneInput onChange={(e) => setFormData(prevState => ({...prevState, phoneNo: e}))}
                                        country='mx' inputStyle={{width: '100%'}} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="fatherName">
                            <Form.Label> Father Name </Form.Label>
                            <Form.Control type='text' onChange={onChangeHandler} value={formData.fatherName} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="motherName">
                            <Form.Label> Mother Name </Form.Label>
                            <Form.Control type='text' onChange={onChangeHandler} value={formData.motherName} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={onChangeHandler} value={formData.email} required/>
                            {/*<Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>*/}
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="passport">
                            <Form.Label>Passport (INE, Passport or Immigration Form) </Form.Label>
                            <Form.Control type='text' onChange={onChangeHandler} value={formData.password}
                                          maxLength={15} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="passportExpireDate">
                            <Form.Label>Passport Expire Date </Form.Label>
                            <Form.Control type='date' onChange={onChangeHandler} required/>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="bankAccount">
                            <Form.Label>Bank Account No. (Active in Mexico)</Form.Label>
                            <Form.Control type='text' onChange={onChangeHandler} value={formData.bankAccount} required/>
                            <Form.Text className="text-muted">
                                only Mexico
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={onChangeHandler} value={formData.password}
                                          required/>
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" onChange={onChangeHandler} value={formData.confirmPassword}
                                          required/>
                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Have Letter of funds are from legal source?"
                                        checked={formData.hasFundsLegalSource}
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            hasFundsLegalSource: e.target.checked
                                        }))}/>
                        </Form.Group>

                        {
                            formData.hasFundsLegalSource && (

                                <Form.Group className="mb-3">
                                    <Form.Control type="file" id='fundsLegalSource' onChange={onChangeHandler}
                                                  required/>
                                    <Form.Text className='text-muted'>
                                        Please Upload the letter of source of funds
                                    </Form.Text>
                                </Form.Group>
                            )
                        }
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Check
                                inline
                                label="RFC Number"
                                value='Number'
                                name="RFCType"
                                type='radio'
                                id='RFCType'
                                onChange={onChangeHandler}
                                checked={formData.RFCType === 'Number'}
                            />
                            <Form.Check
                                inline
                                label="RFC Document"
                                value="Document"
                                name="RFCType"
                                type='radio'
                                id='RFCType'
                                onChange={onChangeHandler}
                                checked={formData.RFCType === 'Document'}
                            />
                            <Form.Control id='RFC' type={formData.RFCType === 'Number' ? 'text' : 'file'} onChange={onChangeHandler}  required/>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Check
                                className='mb-3'
                                inline
                                label="CURP Number"
                                value='Number'
                                name="CURPType"
                                type='radio'
                                id='CURPType'
                                onChange={onChangeHandler}
                                checked={formData.CURPType === 'Number'}
                            />
                            <Form.Check
                                className='mb-3'
                                inline
                                label="CURP Document"
                                value="Document"
                                name="CURPType"
                                type='radio'
                                id='CURPType'
                                onChange={onChangeHandler}
                                checked={formData.CURPType === 'Document'}
                            />
                            {/*<Form.Control id='CURP' type={formData.CURPType === 'Number' ? 'text' : 'file'} onChange={onChangeHandler}  required/>*/}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}/>
                    <Col md={4}>
                        <Button variant="outline-danger" className='w-100' type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default InvestorForm