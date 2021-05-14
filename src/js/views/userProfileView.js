import {Container, Row, Card, Table} from "react-bootstrap";
import "./customCSS.css";

// For checking button behaviour, delete it later.
const stateMessage = (x) =>{
  console.log(JSON.stringify(x))
}

const UserProfileView = ({sortableList, requestSort, deviceID, sortConfig})=>{
  /* For deciding what CSS to use when state changes */

  const getClassNamesFor = (name) => {
    if(!sortConfig){
      return;
    }
    return sortConfig.key === name ? sortConfig.direction: undefined;
  };

  return(
    <Container className="mt-fix">
      <Card className="shadow p-5 mb-5 bg-white rounded mt-5">
        <Row className="pb-5">
          <h2 className="font-weight-bolder color-text-blue">
            This is your user profile
          </h2>
        </Row>
        <Row className="pt-5 pb-5">
          <div>
            <h5 data-testid="deviceIDTextElement" className="font-weight-bold">This is the data over time for the device : {deviceID}</h5><br/>
            <p>Click the table headings to sort by value</p>
          </div>
          <Table bordered striped>
            <thead>
              <tr>
                <th>
                  Date
                  <button type="button"
                  onClick={() => requestSort("MeasurementDate")}
                  className={getClassNamesFor("MeasurementDate")}>
                  </button>
                </th>
                <th>
                  Pulse
                  <button type="button"
                  onClick={() => requestSort("HeartPulse")}
                  className={getClassNamesFor("HeartPulse")}>
                  </button>
                </th>
                <th>
                  Temperature
                  <button type="button"
                  onClick={() => requestSort("BodyTemperature")}
                  className={getClassNamesFor("BodyTemperature")}>
                  </button>
                </th>
                <th>
                  Oxygen level
                  <button type="button"
                  onClick={() => requestSort("BloodOxygenLevel")}
                  className={getClassNamesFor("BloodOxygenLevel")}>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody data-testid="measurementsListTableElement">
              {sortableList.map((data, i)=>(
                <tr key={i}>
                  <td>{data.MeasurementDate}</td>
                  <td>{data.HeartPulse} bpm</td>
                  <td>{data.BodyTemperature} &#8451;</td>
                  <td>{data.BloodOxygenLevel}%</td>
                </tr>
              ))}
            </tbody>
    		  </Table>
        </Row>
        <Row>
          <p>
            Explaining text here and more information, maybe links to graphs and such?
          </p>
          <button onClick={() => stateMessage(sortConfig)}>Log current sorting state</button>
        </Row>
      </Card>
    </Container>
  )
};

export default UserProfileView;
