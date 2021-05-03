import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import "./customCSS.css";

const UserProfileView = ({ measurementsList }) =>
  <Container className="mt-fix">
    <Card className="shadow p-5 mb-5 bg-white rounded mt-5">
      <Row className="pt-5 pb-5">
        <div>
          <h5 className="font-weight-bold color-text-blue">This data over time</h5><br />
          <p>Click the table headings to sort by value</p>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Pulse</th>
              <th>Temperature</th>
              <th>Oxygen level</th>
            </tr>
          </thead>
          <tbody>
            {measurementsList.map(measurementEntry => // Map each entry in the measruments list to a table row
              <tr key={measurementEntry.MeasurementDate}>

                <td>{measurementEntry.MeasurementDate}</td>
                <td>{measurementEntry.HeartPulse}</td>
                <td>{measurementEntry.BodyTemperature}</td>
                <td>{measurementEntry.BloodOxygenLevel}</td>

              </tr>)}
          </tbody>
        </Table>
      </Row>
    </Card>
  </Container>
  ;

export default UserProfileView;

/*
<Row>
  <Col>
    <Row className="pt-3 pl-3">
      <p className="color-text-blue darken-4 font-weight-bolder">
        This is the current data
      </p>
    </Row>
    <Card className="p-3 bg-white rounded">
      <Row className="p-3">
        <p className="p-1 font-weight-bold">Timestamp:</p>
        <p className="p-1">Textbox</p>
      </Row>
      <Row className="p-3">
        <p className="p-1 font-weight-bold">Pulse:</p>
        <p className="p-1">Textbox</p>
      </Row>
      <Row className="p-3">
        <p className="p-1 font-weight-bold">Temperature:</p>
        <p className="p-1">Textbox</p>
      </Row>
      <Row className="p-3">
        <p className="p-1 font-weight-bold">Oxygen Level:</p>
        <p className="p-1">Textbox</p>
      </Row>
      <Row className="p-3">
        <p className="p-1 font-weight-bold">Stress Level:</p>
        <p className="p-1">Textbox</p>
      </Row>
    </Card>
  </Col>
  <Col className="pt-3" sm={5}>
    <Row>
      <p className="color-text-blue darken-4 font-weight-bolder">
        Data over time
      </p>
    </Row>
    <Row>
      <img alt="Graph 1" className="" width="100%" src="Graph1.png" />
    </Row>
    <Row>
      <img alt="Graph 2" className="" width="100%" src="Graph2.png" />
    </Row>
  </Col>
</Row>
<Row>
  <Col>
    <p>
      Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras non fermentum neque. Vivamus facilisis mauris ut consectetur
      egestas. Nullam egestas, enim sit amet malesuada imperdiet, massa
      felis placerat nibh, vitae viverra purus orci at dolor. Vivamus non
      suscipit purus, eget venenatis metus. Praesent sit amet nibh tortor.
      Morbi id ex dictum tellus fringilla tincidunt sit amet at quam.
      Nulla dapibus accumsan mattis. Sed pellentesque dui quis blandit sodales.
      Vestibulum mollis nisi eget mollis scelerisque. Donec mollis pulvinar
      magna non viverra. Duis sed auctor justo, non bibendum mauris. Donec
      lobortis posuere dolor malesuada mollis. Nullam et vestibulum sapien.
      Sed non consectetur ante. Donec fringilla vulputate lectus. Aliquam
      lobortis est ut quam volutpat tincidunt. Suspendisse consequat justo
      ante, vel bibendum velit feugiat in. Morbi ornare pretium diam, quis
      semper mi sagittis egestas. In hac habitasse platea dictumst.
      Quisque dapibus arcu sem, vitae rutrum enim lobortis sed. Pellentesque
      cursus purus et arcu commodo, eget euismod odio commodo. Proin id
      dignissim nisl. Vestibulum sit amet lacus eleifend, finibus augue
      quis, blandit lorem. Proin nec ultrices nulla, id vestibulum libero.
      Nulla id nisi in lacus vehicula hendrerit non in nunc. Etiam nec dui
       tortor. Nam ac tincidunt ante.
    </p>
  </Col>
</Row>

*/
