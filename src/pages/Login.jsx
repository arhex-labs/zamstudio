import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, setEmail, setPassword, setName } from "../redux/login";
import { setTypes, setLastPage, setCurrentPage } from "../redux/dashboard";

export default function Login() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);
  const handleLogin = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    let response = 
      await fetch(
        "https://safetydevapis.safetytracker.be/public/api/login",
        options
      ).then(res => res.json());
    if (!response.status) {
      window.alert(response.message);
      return;
    }
    dispatch(login(response.token));
    dispatch(setName(response.data.first_name + " " + response.data.last_name));
    const auth = "Bearer " + response.token;
    let myTypes = await fetch(
      "https://safetydevapis.safetytracker.be/public/api/management/information/type",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": auth,
        },
      }
    ).then((res) => res.json());
    dispatch(setTypes(myTypes.data.type.data))
    dispatch(setCurrentPage(myTypes.data.type.current_page))
    dispatch(setLastPage(myTypes.data.type.last_page))
    return;
  };
  return (
    <div className="login">
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="p-4">
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  dispatch(setEmail(e.target.value));
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  dispatch(setPassword(e.target.value));
                }}
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
