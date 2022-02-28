import { Container, Form, Row, Col, Stack } from "react-bootstrap";

export default function StepEight() {
  return (
    <Container>
      <h1>कृषि विभाग - </h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार को प्राप्त मिनीकिट्स की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार को प्राप्त मिनीकिट्स की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. फसल बीमा योजना का लाभ हॉ या ना</h4>
            </Col>
            <Col>
              <Form.Control placeholder="फसल बीमा योजना का लाभ हॉ या ना"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. पौध संरक्षण उपकरण अनुदान हॉ या ना</h4>
            </Col>
            <Col>
              <Form.Control placeholder="पौध संरक्षण उपकरण अनुदान हॉ या ना"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. कृषक साथी योजना में यदि कभी लाभ मिला है तो विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="कृषक साथी योजना में यदि कभी लाभ मिला है तो विवरण"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. कृषि यंत्रों पर अनुदान हॉ या ना</h4>
            </Col>
            <Col>
              <Form.Control placeholder="कृषि यंत्रों पर अनुदान हॉ या ना"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. पौध संरक्षण उपकरण अनुदान हॉ या ना</h4>
            </Col>
            <Col>
              <Form.Control placeholder="पौध संरक्षण उपकरण अनुदान हॉ या ना"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                7. कृषि विज्ञान में अध्ययनरत छात्राओं को छात्रवृति मिली है या
                नहीं
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="कृषि विज्ञान में अध्ययनरत छात्राओं को छात्रवृति मिली है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>8. प्रधानमंत्री सम्मान निधि योजन का लाभा मिला या नहीं</h4>
            </Col>
            <Col>
              <Form.Control placeholder="प्रधानमंत्री  सम्मान निधि योजन का लाभा मिला या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>9. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विशेष विवरण"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}