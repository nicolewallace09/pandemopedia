import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import Moment from 'react-moment';


const StateCard = ({value}) => {
  return (
    <>
    <div>
            <Card border="black" className="homepage-card" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10}}>
             <div>
                <div>
                    <h1>Your Search Results:</h1>
                    <br></br>
                    <Row>
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{value.state.toUpperCase()} TOTAL CASES</h4> 
                    <h3 className="text-primary text-center">{value.confirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths:</p> {value.deaths.toLocaleString()}
                    <br></br>
                    </Col>
                
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{value.state.toUpperCase()} NEW CASES</h4>
                    <h3 className="text-primary text-center">{value.newConfirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths: </p> {value.newDeaths.toLocaleString()}
                    <br></br>
                    <br></br>
                    </Col>
                    </Row>
                    Last Updated: <Moment format="MMMM Do, YYYY hh:mm a">{value.Last_Update}</Moment>
                </div>
            </div>
            </Card>
    </div>
    </>
  )
}

export default StateCard;