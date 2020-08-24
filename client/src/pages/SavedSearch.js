import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button, Row, Col } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeStateId } from '../utils/localStorage'; 
import { useQuery, useMutation } from '@apollo/react-hooks'; // verify we have react-hooks npm
import { useApolloClient } from '@apollo/client';
import { GET_ME } from '../utils/queries'; // need to define
import { REMOVE_STATE_SEARCH } from '../utils/mutations'; // need to build
import gql from 'graphql-tag';
import Moment from 'react-moment';

const SavedStateSearch = () => {
  const client = useApolloClient()
 
  const [removeStateSearch, { error }] = useMutation(REMOVE_STATE_SEARCH);
  //const [savedData, setSavedData] = useState([])
  const { loading, data } = useQuery(GET_ME); 
  //const loading = null;
  //const data  = null;
  const userData = data?.me || {};
  

  console.log(userData);
  //console.log(userData.savedStateSearch);
  //console.log(userData.savedStateSearch[0].stateId);
  
  console.log ('stateId', userData.savedStateSearch && userData.savedStateSearch[3].stateId)
  console.log ('name', userData.savedStateSearch && userData.savedStateSearch[3].name)
  console.log ('confimred', userData.savedStateSearch && userData.savedStateSearch[3].confirmed)
  console.log ('newConfirmed', userData.savedStateSearch && userData.savedStateSearch[3].newConfirmed)
  console.log ('deaths', userData.savedStateSearch && userData.savedStateSearch[3].deaths)
  console.log ('newDeaths', userData.savedStateSearch && userData.savedStateSearch[3].newDeaths)

  
  
  
//   async function refreshData() {
//     console.log(await client.query({ query: gql `{
//     me {
//       _id
//       username
//       email
//       stateCount
//       savedStateSearch {
//         name
//         confirmed
//         newConfirmed
//         deaths
//         newDeaths
//         stateId
//       }
//     }
//   }`}))
//     //setSavedData(['hello'])
//     //console.log(savedData);
//     userData.savedStateSearch = []
//   }
//    useEffect(( ) => {
//        refreshData()
//    })
  

  
//   useEffect(() => {
//     if (!userData && !userData.savedStateSearch) {
//         console.log(userData.savedStateSearch[0].stateId)
//         console.log(userData.savedStateSearch[1].stateId)
//     }
//     });

    // useEffect(() => {
    //     return () => console.log(userData.savedStateSearch.stateId);
    //     });

  
    // const updateSearchData = async (userData) => {
    //     event.preventDefault();
    
    //     if (!userData) {
    //       return false;
    //     }
    
    //     try {
    //       const response = await searchByState(searchInput);
    //       console.log(searchInput);
    //       console.log(response);
    
    //       if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //       }
    
    //       const data = await response.json();
    //       console.log(data);
    
    
    //       stateData = {
    //         confirmed: data.Confirmed,
    //         deaths: data.Deaths,
    //         newConfirmed: data.NewConfirmed,
    //         newDeaths: data.NewDeaths,
    //         lastUpdate: data.Last_Update,
    //         state: searchInput,
    //         stateId: data.Slug_State
    //       };
          
    //       setSavedStateIds([...savedStateIds, stateData.stateId]);
    //       //setSearchInput(searchInput);
    //       setHoldStateId(stateData.stateId);
          
    //       setSearchInput('');
    //       //setSearchedUsState(searchedUsState);
    //       setSearchedUsState([...searchedUsState, stateData]);
    //       //setSearchedUsState(stateData);
    //       // try using filter so that I can iterate through the data
    //       } catch (err) {
    //         console.error(err);
    //       }
          
    //   };
  
  
  
  
  
  
    // create function that accepts the states's ID value as param and deletes the state search from the database
  const handleDeleteStateSearch = async (stateId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeStateSearch({
        variables: { stateId }
      });
      console.log(data);

      if (error) {
        throw new Error('something went wrong!');
      }

      // upon success, remove book's id from localStorage
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
                    <h1>Your Search Results:</h1>
                    <br></br>
                    <Row>   
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{userData.savedStateSearch && userData.savedStateSearch[3].name.toUpperCase()} TOTAL CASES</h4> 
                    <h3 className="text-primary text-center">{userData.savedStateSearch && userData.savedStateSearch[3].confirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths:</p> {userData.savedStateSearch && userData.savedStateSearch[3].deaths.toLocaleString()}
                    <br></br>
                    </Col>
                
                    <Col xs={9} md={6}>
                    <h4 className="text-center">{userData.savedStateSearch && userData.savedStateSearch[3].name.toUpperCase()} NEW CASES</h4>
                    <h3 className="text-primary text-center">{userData.savedStateSearch && userData.savedStateSearch[3].newConfirmed.toLocaleString()}</h3>
                    <br></br>
                    <p className="badge badge-danger">Deaths: </p> {userData.savedStateSearch && userData.savedStateSearch[3].newDeaths.toLocaleString()}
                    <br></br>
                    <br></br>
                    </Col>
                    </Row>
                    Last Updated: <Moment format="MMMM Do, YYYY hh:mm a">{userData.savedStateSearch && userData.savedStateSearch[3].lastUpdate}</Moment>
                    
                </div>
                <div>
                    
                </div>
            </div>
            </Card>
            
        
     
    </div>
     </>
   );
};

export default SavedStateSearch;

