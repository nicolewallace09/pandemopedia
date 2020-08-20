import React from 'react';
import { Card, Spinner} from 'react-bootstrap';
import Moment from 'react-moment';


const StateCard = ({value}) => {

  console.log('Is value data being passed', value)
  //console.log('Is region data being passed', region)
  // console.log('confirmed', value.confirmed)
  // console.log('deaths', value.deaths)
  // console.log('newConfirmed', value.newConfirmed)
  // console.log('newDeaths', value.newDeaths)
  
  
  return (
    <>
    <div>
            <Card border="white" className="homepage-card">
            <div>
                <div>
                    <h4 className="text-center">TOTAL CASES</h4> 
                    <h3 className="text-primary text-center">{value.confirmed.toLocaleString()}</h3>
                    <br></br>
                    <p class="badge badge-danger">Deaths:</p> {value.deaths.toLocaleString()}
                    <br></br>

                    <h4 className="text-center">NEW CASES</h4>
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