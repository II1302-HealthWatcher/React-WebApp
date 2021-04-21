import {Container, Row, Col, Card} from "react-bootstrap";

/*
const HomepageView = () => (

    <div className="container mt-5">
        <div className="card">
            <div className="row">
                <div className="col-md-5">
                    <img className="rounded mx-auto d-block mt-5 mb-5 pt-5 pl-4" width="350" height="300" src="android-chrome-512x512.png" />
                </div>
                <div className="col-md-5 ">
                    <h1 className="pt-4">Health Watcher</h1>
                    <h5 className="pt-2 pb-3">Welcome to the HealthWatcher Webapp</h5>
                    <h3 className="pb-3">(｡♥‿♥｡)</h3>
                    <h7 className="mt-4 font-weight-bold">What is HealthWatcher?</h7>
                    <p className="mr-5">
                    HealthWatcher is a product that lets user monitor patients
                    , relatives or friends vital signs with a bracelet containing
                    multiple sensors.
                    </p>

                    <h7 className="mt-4 font-weight-bold">How to use ?</h7>
                    <p className="mr-5 mb-4">
                    First create an account. Then you can register the Device ID
                    that came with the purchased bracelet. Now you are ready to
                    monitor the users vital signs.
                    </p>
                </div>
            </div>
        </div>
    </div>
); */



const HomepageView = ()=>
  <Container className="mt-5">
    <Card className="shadow p-3 mb-5 bg-white rounded">
      <Row>
        <Col className="col-md-6">
          <img alt="Big logo" className="rounded mx-auto d-block mt-5 mb-5 pt-5 pl-4" width="350" height="300" src="android-chrome-512x512.png" />
        </Col>
        <Col className="col-md-5">
          <h1 className="pt-4 blue-text darken-4 font-weight-bolder">Health Watcher</h1>
          <h5 className="pt-2 pb-3">Welcome to the HealthWatcher Webapp</h5>
          <h3 className="pb-3">(｡♥‿♥｡)</h3>
          <h7 className="mt-4 font-weight-bold">What is HealthWatcher?</h7>
          <p className="mr-5">
            HealthWatcher is a product that lets user monitor patients, relatives
            or friends vital signs with a bracelet containing multiple sensors.
          </p>

          <h7 className="mt-4 font-weight-bold">How to use ?</h7>
          <p className="mr-5 mb-4">
          First create an account. Then you can register the Device ID
          that came with the purchased bracelet. Now you are ready to
          monitor the users vital signs.
          </p>
        </Col>
      </Row>
    </Card>
  </Container>
;

export default HomepageView;
