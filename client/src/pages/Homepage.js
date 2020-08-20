import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Form, Col, Button, Row} from 'react-bootstrap';
import GlobalCard from '../components/GlobalCard';
import CountryCard from '../components/CountryCard';
import StateCard from '../components/StateCard';
import { searchByState } from '../utils/API';
import TimelineCases from '../components/TimelineCases';
import TimelineDeaths from '../components/TimelineDeaths';


const Homepage = () => {

  // create state for holding returned api data
  const [searchedUsState, setSearchedUsState] = useState([]); //////

  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState(''); //////

  let stateData = {};

  // create state to hold saved stateID values
  const [savedStateIds, setSavedStateIds] = useState(''); // still need to define and pass in getSavedStateIds() to be consistent with BookSearch.js

  //const [saveState, { error }] = useMutation(SAVE_STATE);  // still need to define([

  // set up useEffect hook to save 'saveStateIds' list to localStorage on component unmount
  // useEffect(() => {
  // return () => saveStateIds(savedStateIds);
  //});

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

      stateData = [{
        confirmed: data.Confirmed,
        deaths: data.Deaths,
        newConfirmed: data.NewConfirmed,
        newDeaths: data.NewDeaths,
        lastUpdate: data.Last_Update,
      }];

      setSearchInput(searchInput);
      //setSearchedUsState(searchedUsState);
      setSearchedUsState(...searchedUsState, stateData);
         
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

  const getSavedStateIds = () => {

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

        <Container>
          <h1 className="header text-center">COVID-19 Tracker</h1>
        </Container>

        <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 0.1 }}>
                    <GlobalCard/>
                </Col>

          <Col sm="12" md={{ size: 6, offset: 0.1 }}>
            <CountryCard />
          </Col>

        </Row>
      </Container>

        <Container>
            <Row>
                <Col sm='12' md={{ size: 6, offset: 0.1 }}>
                    { searchedUsState.length > 0 ? <StateCard value = {searchedUsState[0]} region = {searchInput} /> : null }
                    {/* { searchedUsState.length > 0 ? <StateCard region = {searchInput} /> : null }
                    */}
                    {/* {JSON.stringify(searchedUsState)} */}
              
                </Col>
                <Col sm="12" md={{ size: 6, offset: 0.1 }}>
                    {/* CityCard will go here */}
                    
                </Col>
            </Row>
        </Container>  
      </>
    );
};

export default Homepage; 
