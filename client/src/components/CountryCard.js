import React from 'react'; 
import Moment from 'react-moment';
import { Card, Spinner} from 'react-bootstrap';

export default class CountryCard extends React.Component {
    state = {
        loading: true,
        us: null
    }; 

    async componentDidMount() {
        const api = "https://corona.azure-api.net/all";
        const response = await fetch(api);
        const data = await response.json();

        console.log(data)
        
        this.setState({ us: data[0], loading: false});
    }
    render() {
    return (
        <>
        <div>
            {this.state.loading || !this.state.us ? (
                <Spinner animation="border" variant="danger" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ):(
                <Card border="white" className="homepage-card">
                <div>
                    <div>
                        <h4 class="text-center">US TOTAL CASES</h4>
                        <h3 class="text-primary text-center">{this.state.us.countryData[165].US.Summary.Confirmed.toLocaleString()}</h3>
                        <br></br>
                        <p class="badge badge-warning">Active:</p> {this.state.us.countryData[165].US.Summary.Active.toLocaleString()}
                        <br></br>
                        <p class="badge badge-success">Recovered:</p> {this.state.us.countryData[165].US.Summary.Recovered.toLocaleString()}
                        <br></br>
                        <p class="badge badge-danger">Deaths:</p> {this.state.us.countryData[165].US.Summary.Deaths.toLocaleString()}
                        <br></br>

                        <h4 class="text-center">US NEW CASES</h4>
                        <h3 class="text-primary text-center">{this.state.us.countryData[165].US.Summary.NewConfirmed.toLocaleString()}</h3>
                        <br></br>
                        <p class="badge badge-success">Recovered:</p> {this.state.us.countryData[165].US.Summary.NewRecovered.toLocaleString()}
                        <br></br>
                        <p class="badge badge-danger">Deaths: </p> {this.state.us.countryData[165].US.Summary.NewDeaths.toLocaleString()}
                        <br></br>
                        <br></br>
                        <i>Last Updated: <Moment format="MMMM Do YYYY hh:mm a">{this.state.us.countryData[165].US.Summary.Last_Update}</Moment></i>
                    </div>
                </div>
                </Card>
                
            
            )}
        </div>
        </>
    )

}
}