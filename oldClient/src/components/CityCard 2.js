import React from 'react'; 
import Homepage from '../pages/Homepage';
//import { Homepage, stateData } from '../pages/Homepage';
//import { [searchInput, setSearchInput] } from '../pages/Homepage';
//console.log(searchInput);

console.log(searchInput);

export default class StateCard extends React.Component {
  
  
  
  state = {
        loading: true,
        world: null
    };

  

    async componentDidMount() {
        const regionState = 'California'; 
        const regionCity = 'San Francisco';
        //this.props.searchInput; // replace with searchInput
        //searchInput; // country is an input, but assuming we will only view US in state search

        
        
        const api = `https://corona.azure-api.net/country/us/${regionState}/${regionCity}`;
        //const api =`https://corona.azure-api.net/country/us/:state/:city`
        const response = await fetch(api);
        const data = await response.json();
        
        this.setState({ city: data, loading: false});
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
                        <h4 className="text-center">US TOTAL CASES</h4>
                        <h3 className="text-primary text-center">{this.state.city.Confirmed.toLocaleString()}</h3>
                        <br></br>
                        <p className="badge badge-warning">Active:</p> {this.state.city.Active.toLocaleString()}
                        <br></br>
                        <p className="badge badge-success">Recovered:</p> {this.state.city.Recovered.toLocaleString()}
                        <br></br>
                        <p class="badge badge-danger">Deaths:</p> {this.state.city.Deaths.toLocaleString()}
                        <br></br>

                        <h4 className="text-center">US NEW CASES</h4>
                        <h3 className="text-primary text-center">{this.state.city.NewConfirmed.toLocaleString()}</h3>
                        <br></br>
                        <p className="badge badge-success">Recovered:</p> {this.state.city.NewRecovered.toLocaleString()}
                        <br></br>
                        <p class="badge badge-danger">Deaths: </p> {this.state.city.NewDeaths.toLocaleString()}
                        <br></br>
                        <br></br>
                        <i>Last Updated: <Moment format="MMMM Do YYYY hh:mm a">{this.state.city.Last_Update}</Moment></i>
                    </div>
                </div>
                </Card>
                
            
            )}
        </div>
        </>
    )

}
}