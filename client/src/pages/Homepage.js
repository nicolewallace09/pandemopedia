import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Form, Col, Button, Row } from 'react-bootstrap';
import GlobalCard from '../components/GlobalCard';
import CountryCard from '../components/CountryCard';
import StateCard from '../components/StateCard';
import { searchByState } from '../utils/API';
import TimelineCases from '../components/TimelineCases';
import TimelineDeaths from '../components/TimelineDeaths';
import { saveStateIds, getSavedStateIds } from '../utils/localStorage';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_STATE } from '../utils/mutations';
import Auth from '../utils/auth';


const Homepage = () => {

  // create state for holding returned api data
  const [searchedUsState, setSearchedUsState] = useState([]);

  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState(''); 

  const [holdStateId, setHoldStateId] = useState('');

  let stateData = {};

  // create state to hold saved stateID values
  const [savedStateIds, setSavedStateIds] = useState(getSavedStateIds()); 

  // save the state info 
  const [saveState, { error }] = useMutation(SAVE_STATE);  

  // set up useEffect hook to save 'saveStateIds' list to localStorage
  useEffect(() => {
  return () => saveStateIds(savedStateIds);
  });

  
  // set setSearchUsState back to original state after state search
  useEffect(() => {
    if (searchedUsState.length > 0) {
    return () => setSearchedUsState([])}
    })

  // create method to search for US States and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchByState(searchInput);
      console.log(searchInput);
      console.log(response);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);


      stateData = {
        confirmed: data.Confirmed,
        deaths: data.Deaths,
        newConfirmed: data.NewConfirmed,
        newDeaths: data.NewDeaths,
        lastUpdate: data.Last_Update,
        state: searchInput,
        stateId: data.Slug_State
      };
      
      setSavedStateIds([...savedStateIds, stateData.stateId]);
      //setSearchInput(searchInput);
      setHoldStateId(stateData.stateId);
      
      setSearchInput('');
      //setSearchedUsState(searchedUsState);
      setSearchedUsState([...searchedUsState, stateData]);
      //setSearchedUsState(stateData);
      // try using filter so that I can iterate through the data
      } catch (err) {
        console.error(err);
      }
      
  };

  

  
   
    // Will use this function with the savedSearch function
  /*  
    const renderSingleSearch = (singleSearch, i) => {
      
      return ( 
        <StateCard2 search = {singleSearch} key = {i}/>
      )}
  */

  // function to handle saving a state to the database
  const handleSaveState = async () => {
    
    // find the state in `savedStateIds` state by the matching id
    const stateInput = savedStateIds.find((search) => search === holdStateId);
    
    console.log('list of saved state IDs', savedStateIds)
    console.log('stateInput', stateInput);
    console.log('holdStateId', holdStateId);
    
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log('token', token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveState({
        variables: { input: holdStateId }
      });

      console.log('save search data', data);
    

    if (error) {
      throw new Error('something went wrong!');
    }

    // if search successfuly saves to user's account, save state ID to state
    setSavedStateIds([...savedStateIds, holdStateId]);
   
    setHoldStateId('')
    
  } catch (err) {
      console.error(err);
    }

  }
      
    return (
        <>
        <Jumbotron fluid className='text-light bg-danger' style={{ height: 560, clear: "both", paddingTop: 200, paddingLeft: 200}}>
          <Container>
            <h5>Search for your state</h5>
            < Form onSubmit={handleFormSubmit}>
              <Form.Row>
                <Col xs={12} md={8}>
                  <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='md'
                    placeholder='Please enter a state'
                  />
                  < i className="app-claim">* This application is intended for US states only</i>
                </Col>
                <Col xs={12} md={4}>
                  <Button type='submit' variant='danger' size='md'>
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>

        <Container fluid>
            <Row>
                <Col sm={12} md={12}>
                    { searchedUsState.length > 0 ? <StateCard value = {searchedUsState[0]}  /> : null }
                    {/* { searchedUsState.length > 0 ? <StateCard region = {searchInput} /> : null }
                    */}
                    {/* {JSON.stringify(searchedUsState)} */}
                    {Auth.loggedIn() && searchedUsState.length > 0 && (
                      <Button onClick = {handleSaveState}>
                        Save    
                      </Button>
                    )}
                    
                </Col>
                <Col sm="12" md={{ size: 12, offset: 0.1 }}>
                    {/* CityCard will go here */}
                    
                </Col>
            </Row>
        </Container> 

        <Container>
          {/* <h1 className="header text-center">COVID-19 Tracker</h1> */}
          <center><img src="https://www.knightdesign.com.au/wp-content/uploads/2020/03/COVID-19.png" alt="covid-logo" style={{ height: 300 }}></img></center>
        </Container>

        <Container fluid>
            <Row>
                <Col sm="12" md="6">
                    <GlobalCard/>
                </Col>

                <Col sm="12" md="6">
                  <CountryCard />
                </Col>
           </Row>
      </Container>

      <Container fluid className="time-series">
      <h1 className="time-header text-center">US Time Series (60 Day Trend)</h1><br></br>
            <Row style={{paddingLeft: 25, paddingBottom: 100}}>
              <Col sm="12" md="6">
                <TimelineCases/>
              </Col>

              <Col sm="12" md="6">
                <TimelineDeaths/>
              </Col>
            </Row>


    
            <Row>
              <Col sm="12" md='12'>
                    <center><img src="https://completemusicupdate.com/wp-content/uploads/2020/03/stopthespread1250.jpg" alt="stopspread" style={{paddingBottom: 100}}></img></center>
              </Col>
            </Row>
      </Container>
      </>
    );
};

export default Homepage;