import React from 'react'; 
//import { searchInput } from '../pages/Homepage';
import { Card, Spinner} from 'react-bootstrap';
import Moment from 'react-moment';
//import { Homepage, stateData } from '../pages/Homepage';
//import { [searchInput, setSearchInput] } from '../pages/Homepage';
//console.log(searchInput);

//console.log(searchInput);

export default class StateCard extends React.Component {
//StateCard = (props) => { 
  
  
  state = {
        loading: true,
        props: null
    };

  

    async componentDidMount() {
      console.log(this.props.value);
        // const region = this.props.searchInput;       //this.props.searchInput; // replace with searchInput
        // //searchInput; // country is an input, but assuming we will only view US in state search

        // const api = `https://corona.azure-api.net/country/us/${region}`;
        // const response = await fetch(api);
        // const data = await response.json();
        
        this.setState({ props: this.props, loading: false});
    }  
    render() {
        return (
            <>
            <div>
              <div>{this.props.value}</div>
{/*               
                {this.state.loading || !this.props ? (
                  <Spinner animation="border" variant="danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ):(
                  <Card border="white" className="homepage-card">
                  <div>
                    {/* <p>{this.props}</p> */}
                      {/* <div>
                          <h4 className="text-center">US TOTAL CASES</h4> */}
                          {/* <h3 className="text-primary text-center">{this.props.stateData.confirmed.toLocaleString()}</h3> */}
                          {/* <br></br> */}
                          {/* <p className="badge badge-warning">Active:</p> {this.state.usState.Active.toLocaleString()}
                          <br></br>
                          <p className="badge badge-success">Recovered:</p> {this.state.usState.Recovered.toLocaleString()}
                          <br></br>
                          <p class="badge badge-danger">Deaths:</p> {this.state.usState.Deaths.toLocaleString()}
                          <br></br>
  
                          <h4 className="text-center">US NEW CASES</h4>
                          <h3 className="text-primary text-center">{this.state.usState.NewConfirmed.toLocaleString()}</h3>
                          <br></br>
                          <p className="badge badge-success">Recovered:</p> {this.state.usState.NewRecovered.toLocaleString()}
                          <br></br>
                          <p class="badge badge-danger">Deaths: </p> {this.state.usState.NewDeaths.toLocaleString()}
                          <br></br>
                          <br></br>
                          <i>Last Updated: <Moment format="MMMM Do YYYY hh:mm a">{this.state.usState.Last_Update}</Moment></i> */}
                      {/* </div>
                  </div>
                  </Card>
                  
              
              )} * */}
          </div>
          </>
      )
  
  }
  }
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    