import React from 'react';
import { Jumbotron, Container, Form, Col, Button, Row } from 'react-bootstrap';
import Chart from '../components/Charts'
import GlobalCard from '../components/GlobalCard';
import CountryCard from '../components/CountryCard';
import StateCard from '../components/StateCard';

// use booksearch for an example on functionality of search input 

const Homepage = () => {
  return (
    <>
      {/* <div class="jumbotron-fluid" ></div> */}
      <Jumbotron fluid className='text-light bg-danger' style={{ height: 560, clear: "both", paddingTop: 200, paddingLeft: 200 }}>
        <Container>
          <h5>Search for your state</h5>
          <Form>
            {/* <Form onSubmit={handleFormSubmit}> -- FROM BOOK SEARCH */}
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  //   value={searchInput}
                  //   onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='md'
                  placeholder='Enter here'
                />
                <i className="app-claim">* This application is intended for US states only</i>
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
            <GlobalCard />
          </Col>

          <Col sm="12" md={{ size: 6, offset: 0.1 }}>
            <CountryCard />
          </Col>

        </Row>
      </Container>

      <Chart />
      <StateCard />
    </>
  );
};


export default Homepage; 
