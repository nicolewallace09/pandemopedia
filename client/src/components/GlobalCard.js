import React from 'react'; 
import Moment from 'react-moment';
import { Card, Spinner} from 'react-bootstrap';

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
                            <h4 class="text-center">GLOBAL TOTAL CASES</h4>
                            <h3 class="text-primary text-center">{this.state.world.globalData.Confirmed.toLocaleString()}</h3>
                            <br></br>
                            <p class="badge badge-warning">Active:</p> {this.state.world.globalData.Active.toLocaleString()}
                            <br></br>
                            <p class="badge badge-success">Recovered:</p> {this.state.world.globalData.Recovered.toLocaleString()}
                            <br></br>
                            <p class="badge badge-danger">Deaths:</p> {this.state.world.globalData.Deaths.toLocaleString()}
                            <br></br>

                            <h4 class="text-center">GLOBAL NEW CASES</h4>
                            <h3 class="text-primary text-center">{this.state.world.globalData.NewConfirmed.toLocaleString()}</h3>
                            <br></br>
                            <p class="badge badge-success">Recovered:</p> {this.state.world.globalData.NewRecovered.toLocaleString()}
                            <br></br>
                            <p class="badge badge-danger">Deaths: </p> {this.state.world.globalData.NewDeaths.toLocaleString()}
                            <br></br>
                            <br></br>
                            <i>Last Updated: <Moment format="MMMM Do YYYY hh:mm a">{this.state.world.globalData.Last_Update}</Moment></i>
                        </div>
                    </div>
                    </Card>

                
                )}
            </div>
            </>
        )
    
    }
}