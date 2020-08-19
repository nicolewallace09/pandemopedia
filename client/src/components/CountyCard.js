import React from 'react'; 
import Homepage from '../pages/Homepage';
import { Card, Spinner} from 'react-bootstrap';
import Moment from 'react-moment';
//import { Homepage, stateData } from '../pages/Homepage';
//import { [searchInput, setSearchInput] } from '../pages/Homepage';
//console.log(searchInput);

//console.log(searchInput);

export default class CountyCard extends React.Component {
  
  
  
  state = {
        loading: true,
        world: null
    };

  

    async componentDidMount() {
        const region = 'california';       //this.props.searchInput; // replace with searchInput
        //searchInput; // country is an input, but assuming we will only view US in state search

        const api = `https://corona.azure-api.net/country/us/${region}`;
        const response = await fetch(api);
        const data = await response.json();
        
        this.setState({ county: data, loading: false});
    }
    render() {
        return (
            <>
            <div>
                {this.state.loading || !this.state.county ? (
                    <div>Loading...</div>
                ):(
                    <div className="row stats-container text-center">
                        <div className="col-6 card">
                            <h5 className="section">State Stats
                            </h5>
                            <div className="row county-container">
                                <div className="col-6">
                                    <h6>Cumulative</h6>
                                    <p className="badge badge-primary">Confirmed: {this.state.county.Confirmed.city[20].toLocaleString()}
                                    </p>
                                    <p className="badge badge-warning">Active: {this.state.county.Active.city.toLocaleString()}
                                    </p>
                                    <p className="badge badge-danger">Deaths: {this.state.county.Deaths.city[20].toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">Recovered: {this.state.county.Recovered.city[20].toLocaleString()}
                                    </p>
                                    <br></br>
                                </div>
                                <div className="col-6">
                                    <h6>Daily</h6>
                                    <p className="badge badge-warning">New Cases: {this.state.county.NewConfirmed.city[20].toLocaleString()}</p>
                                    <p className="badge badge-danger">New Deaths: {this.state.county.NewDeaths.city[20].toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">New Recovered: {this.state.county.NewRecovered.city[20].toLocaleString()}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
                  ) }
                   
            </div> 
            </>
        )
    
    }
  }


/* The county data is indexed, so we need a text input since building 50 switch functions is not realistic  */

