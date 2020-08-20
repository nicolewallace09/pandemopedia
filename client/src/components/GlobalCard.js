import React from 'react'; 
import Moment from 'react-moment';
import { Card, Row, Col, Spinner} from 'react-bootstrap';
import GlobalTotalChart from './GlobalTotalChart';
import GlobalNewChart from './GlobalNewChart';

export default class GlobalCard extends React.Component {
    state = {
        loading: true,
        world: null
    }; 

    async componentDidMount() {
        const api = "https://corona.azure-api.net/all";
        const response = await fetch(api);
        const data = await response.json();

        console.log(data)

        this.setState({ world: data[0], loading: false});
    }
    render() {
        return (
            <>
            <div>
                {this.state.loading || !this.state.world ? (
                    <Spinner animation="border" variant="danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ):(
                    <Card border="white" className="homepage-card">
                    <div>
                        <div>
                            <h4 className="text-center">GLOBAL TOTAL CASES</h4>
                            <h3 className="text-primary text-center">{this.state.world.globalData.Confirmed.toLocaleString()}</h3>
                            <br></br>
                            <Row>
                            <Col xs={9} md={7}>
                            <p className="badge badge-warning">Active:</p> {this.state.world.globalData.Active.toLocaleString()}
                            <br></br>
                            <p className="badge badge-success">Recovered:</p> {this.state.world.globalData.Recovered.toLocaleString()}
                            <br></br>
                            <p className="badge badge-danger">Deaths:</p> {this.state.world.globalData.Deaths.toLocaleString()}
                            </Col>
                            <Col xs={3} md={3}>
                            <GlobalTotalChart/>
                            </Col>
                            </Row>

                            <h4 className="text-center">GLOBAL NEW CASES</h4>
                            <h3 className="text-primary text-center">{this.state.world.globalData.NewConfirmed.toLocaleString()}</h3>
                            <br></br>
                            <Row>
                            <Col xs={9} md={7}>
                            <p className="badge badge-success">Recovered:</p> {this.state.world.globalData.NewRecovered.toLocaleString()}
                            <br></br>
                            <p className="badge badge-danger">Deaths: </p> {this.state.world.globalData.NewDeaths.toLocaleString()}
                            </Col>
                            <Col xs={3} md={3}>
                            <GlobalNewChart/>
                            </Col>
                            </Row>
                            Last Updated: <Moment format="MMMM Do, YYYY hh:mm a">{this.state.world.globalData.Last_Update}</Moment>
                        </div>
                    </div>
                    </Card>

                
                )}
            </div>
            </>
        )
    
    }
}