import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeStateId } from '../utils/localStorage'; 
import { useQuery, useMutation } from '@apollo/react-hooks'; 
import { GET_ME } from '../utils/queries';
import { REMOVE_STATE_SEARCH } from '../utils/mutations';
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

    console.log('returned data', userData);
   return (
     <>
        <Container fluid>
            <h2>{userData.savedStateSearch && userData.savedStateSearch.length ? `${userData.username} has ${userData.savedStateSearch.length} saved ${userData.savedStateSearch.length === 1 ? 'search' : 'searches'}`
                : `${userData.username} has no saved searches!`}
            </h2>
        </Container>
        <div>
            <Card border="white" className="homepage-card" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10}}>
             <div>
                <div>
                    <h1 className="text-center">Your Saved Searches:</h1>
                    <br></br>
                    {userData.savedStateSearch.map((search) => {
                        return (
                    <Row key={search.stateId}>   
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
                    </Col>
                    <Col md={6}>
                    Last Updated: <Moment format="MMMM Do, YYYY hh:mm a">{search.lastUpdate}</Moment>
                    </Col>

                    <Col md={6}>
                    <Button type='submit' variant='danger' size='md' style={{ justifyContent: 'flex-end'}} onClick={() => handleDeleteStateSearch(search.stateId)}>Delete this search</Button>
                    </Col>
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

