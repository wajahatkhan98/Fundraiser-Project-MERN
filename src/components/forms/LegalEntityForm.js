import { Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import apis from '../../services';

const LegalEntityForm = () => {
  const [formData, setFormData] = useState({
    articlesIncorporation: null,
    taxID: null,
    taxDomicile: null,
    powerOfAttorney: null,
    shareHolder: null,
    electronicSignature: null,
    hasFundsLegalSource: false,
    fundsLegalSource: null,
  });

  const onChangeHandler = (e) => {
    const { id, value, files } = e.currentTarget;
    console.log({
      id: e.target.id,
      file: e.target.files,
      value: e.target.value,
    });

    if (files) setFormData((prevState) => ({ ...prevState, [id]: files[0] }));
    else setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    await apis.legalForm({ ...formData, type: 'legalEntity' });
  };
  return (
    <>
      <Container>
        <Form
          className="my-2"
          onSubmit={submitHandler}
           enctype="multipart/form-data"
        >
          <Row>
            <Col>
              <h2 className="text-center text-uppercase my-5">
                Legal Entity Form
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Articles of Incorporation</Form.Label>
                <Form.Control
                  type="file"
                  id="articlesIncorporation"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Tax ID card (Legal Entity)</Form.Label>
                <Form.Control
                  type="file"
                  id="taxID"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Proof of tax domicile (Legal Entity)</Form.Label>
                <Form.Control
                  type="file"
                  id="taxDomicile"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Power of attorney of the legal representative
                </Form.Label>
                <Form.Control
                  type="file"
                  id="powerOfAttorney"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Document with shareholder/corporate structure
                </Form.Label>
                <Form.Control
                  type="file"
                  id="shareHolder"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Proof of advanced electronic signature</Form.Label>
                <Form.Control
                  type="file"
                  id="electronicSignature"
                  onChange={onChangeHandler}
                  required
                />
                <Form.Text className="text-muted"> suggestion </Form.Text>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Have Letter of funds are from legal source?"
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        hasFundsLegalSource: e.target.checked,
                      }))
                    }
                  />
                </Form.Group>
              </Form.Group>
            </Col>

            {formData.hasFundsLegalSource && (
              <Col md={4}>
                <Form.Group className="mb-3">
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
                </Form.Group>
              </Col>
            )}
          </Row>
          <Row>
            <Col md={4} />
            <Col md={4}>
              <Button variant="outline-danger" className="w-100" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LegalEntityForm;
