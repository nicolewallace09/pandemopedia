
// api for state and city
var apiUrlAllData4 = "https://corona.azure-api.net/country/us/:state/:city"
var apiUrlAllData5 = "https://corona.azure-api.net/country/us/California/Los Angeles"

import React from 'react';
import { Card, Spinner} from 'react-bootstrap';
import Moment from 'react-moment';


const StateCard = ({value, region}) => {

  console.log('Is value data being passed', value)
  console.log('Is region data being passed', region)
  
  return (
    <>
    <div>
            <Card border="white" className="homepage-card">
            <div>
                <div>
                    <h4 className="text-center">{region.toUpperCase()} TOTAL CASES</h4> 
                    <h3 className="text-primary text-center">{value.confirmed.toLocaleString()}</h3>
                    <br></br>
                    <p class="badge badge-danger">Deaths:</p> {value.deaths.toLocaleString()}
                    <br></br>

                    <h4 className="text-center">{region.toUpperCase()} NEW CASES</h4>
                    <h3 className="text-primary text-center">{value.newConfirmed.toLocaleString()}</h3>
                    <br></br>
                    <p class="badge badge-danger">Deaths: </p> {value.newDeaths.toLocaleString()}
                    <br></br>
                    <br></br>
                    <i>Last Updated: <Moment format="MMMM Do YYYY hh:mm a">{value.Last_Update}</Moment></i>
                </div>
            </div>
            </Card>
            
        
     
    </div>
    </>
)

}

export default StateCard;