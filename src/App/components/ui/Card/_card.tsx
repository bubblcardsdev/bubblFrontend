import { Col, Container, Row } from "react-bootstrap";

function Layout() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Yay, its fluid!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
