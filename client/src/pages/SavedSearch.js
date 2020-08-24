import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeStateId } from '../utils/localStorage'; 
import { useQuery, useMutation } from '@apollo/react-hooks'; // verify we have react-hooks npm
import { GET_ME } from '../utils/queries'; // need to define
import { REMOVE_STATE_SEARCH } from '../utils/mutations'; // need to build
import Moment from 'react-moment';

const SavedStateSearch = () => {
  
    // mutation to remove a search
    const [removeStateSearch, { error }] = useMutation(REMOVE_STATE_SEARCH);
  
    // query the user data, which contains saved searches
    const { loading, data } = useQuery(GET_ME); 
  
    // userData is provided by the database or is an empty object
    const userData = data?.me || {};
  
  
    // create function that accepts the states's ID value as param and deletes the state search from the database
    const handleDeleteStateSearch = async (stateId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
          return false;
      }

      try {
          const { data } = await removeStateSearch({
              variables: { stateId }
      })
     
      if (error) {
          throw new Error('something went wrong!');
      }

      // upon success, remove state's id from localStorage
      removeStateId(stateId);
    
      } catch (err) {
          console.error(err);
      }
    };

    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            <Container>
                <h1>Viewing saved searches!</h1>
            </Container>
            <Container>
                <h2>
                    {userData.savedStateSearch && userData.savedStateSearch.length ? `Viewing ${userData.savedStateSearch.length} saved ${userData.savedStateSearch.length === 1 ? 'search' : 'searches'}:`
                  : 'You have no saved searches!'}
                </h2>
            </Container>
            <div>
                <Card border="black" className="homepage-card" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10}}>
             <div>
                <div>
                    <h1>Your Saved Search Results:</h1>
                    <br></br>
                    {userData.savedStateSearch.map((search) => {
                        return (
                    <Row>   
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{search.name.toUpperCase()} TOTAL CASES</h4> 
                    <h3 className="text-primary text-center">{search.confirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths:</p> {search.deaths.toLocaleString()}
                    <br></br>
                    </Col>
                
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{search.name.toUpperCase()} NEW CASES</h4>
                    <h3 className="text-primary text-center">{search.newConfirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths: </p> {search.newDeaths.toLocaleString()}
                    <br></br>
                    <br></br>
                    <Button className='btn-block btn-danger' size='md' onClick={() => handleDeleteStateSearch(search.stateId)}>Delete this Search!</Button>
                    </Col>
                    Last Updated: <Moment format="MMMM Do, YYYY hh:mm a">{search.lastUpdate}</Moment>
                    
                    </Row>
                    )})}
                </div>
                
            </div>
            </Card>
            
        
     
    </div>
     </>
   );
};

export default SavedStateSearch;

