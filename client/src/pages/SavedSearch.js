import React, { useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeStateId } from '../utils/localStorage'; 
import { useQuery, useMutation } from '@apollo/react-hooks'; // verify we have react-hooks npm
import { GET_ME } from '../utils/queries'; // need to define
import { REMOVE_STATE_SEARCH } from '../utils/mutations'; // need to build

const SavedStateSearch = () => {
  const [removeStateSearch, { error }] = useMutation(REMOVE_STATE_SEARCH); // need to build

  const { loading, data } = useQuery(GET_ME); 
  const userData = data?.me || {};
  console.log(userData);
  console.log(userData.savedStateSearch)
  console.log(userData.savedStateSearch.stateId[0])
  //console.log(userData.savedStateSearch.length)
  //useEffect(() => {
    //console.log('user info', userData);
    //console.log('one state id', userData.SavedStateSearch.stateId)
    //});



  
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

  //console.log('userData length', userData.savedStateSearch.length);
  //console.log(userData.savedStateSearch.length);


  

   return (
     <>
        <Container>
            <h1>Viewing saved searches!</h1>
        </Container>
        <Container>
            {/* <h2>
                {userData.savedStateSearch.length ? `Viewing ${userData.savedStateSearch.length} saved ${userData.savedStateSearch.length === 1 ? 'search' : 'searches'}:`
                : 'You have no saved searches!'}
            </h2> */}
        </Container>
     </>
   );
};

export default SavedStateSearch;

