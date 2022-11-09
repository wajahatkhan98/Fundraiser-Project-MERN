import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import apis from "../services";
import { useNavigate } from "react-router-dom";
import { authLogin, getProfile } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const { state, dispatch } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    status: false,
    message: [],
    variant: "danger",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(apis.authLogin(formData))
        // const response = dispatch({ type: "USER", payload: true });
        .then((data) => {
          console.log(data);
          if (data.payload.data.status === false) {
            toast.error(`${data.payload.data.message}`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (data.payload.data.status === true) {
            toast(`${data.payload.data.message}`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }
        });

      // const token = response?.data?.data?.token;

      // if (token) {
      //   localStorage.setItem('access_token', token);
      // }

      // navigate('/');
    } catch (error) {
      setError({ status: true, message: error.message, variant: "danger" });
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center text-uppercase my-5">Login User</h2>
        </Col>
      </Row>
      <Form onSubmit={onSubmitHandler}>
        <Row>
          <Col md={4} />
          <Col md={4}>
            {error.status && (
              <Alert
                variant={error.variant}
                onClose={() =>
                  setError((prevState) => ({ ...prevState, status: false }))
                }
                dismissible
              >
                Password Invalid
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={onChangeHandler}
                value={formData.email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="text"
                placeholder="Password"
                onChange={onChangeHandler}
                value={formData.password}
                required
              />
            </Form.Group>

            <Button
              variant="outline-danger"
              className="w-100 mb-5"
              type="submit"
            >
              {" "}
              Login{" "}
            </Button>
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
    </Container>
  );
};

export default Login;
