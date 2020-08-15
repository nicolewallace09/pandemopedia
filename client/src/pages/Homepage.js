import React from 'react';
import { Jumbotron, Container, Form, Col, Button} from 'react-bootstrap';
import Example from '../components/Charts'
import GlobalCard from '../components/GlobalCard';
import StateCard from '../components/StateCard';

// use booksearch for an example on functionality of search input 

const Homepage = () => {
    return (
        <>
        {/* <div class="jumbotron-fluid" ></div> */}
        <Jumbotron fluid className='text-light bg-danger' style={{ height: 560, clear: "both", paddingTop: 200, paddingLeft: 200}}>
        <Container>
          <h5>Search for your city</h5>
          <Form>
          {/* <Form onSubmit={handleFormSubmit}> -- FROM BOOK SEARCH */ }
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                //   value={searchInput}
                //   onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='md'
                  placeholder='Please enter a city'
                />
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

        <div class="row stats-container text-center">
            <div class="col-6 card">
                <h1 class="section">Global Placeholder</h1>
                <div class="row global-container">
                    <div class="col-12">
                        <p class="badge badge-primary">Confirmed:</p> Example# <p class="badge badge-warning">Active:</p> Example#<br></br>
                    </div>
                    <div class="col-12">
                        <p class="badge badge-success">Recovered:</p> Example# <p class="badge badge-danger">Deaths:</p> Example#
                    </div>
                </div>
            </div>

            <div class="col-6">
                <h1 class="section">United States Placeholder</h1>
            </div>
        </div>
        <Example/>
        <GlobalCard/>
        <StateCard/>
        </>
    );
};


export default Homepage; 
