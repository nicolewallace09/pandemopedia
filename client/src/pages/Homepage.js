import React from 'react';
import { Jumbotron, Container, Form, Col, Button, Row, Card} from 'react-bootstrap';
import Example from '../components/Charts'
import GlobalCard from '../components/GlobalCard';
import CountryCard from '../components/CountryCard';

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

      <Container fluid>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 0.1 }}>
                    <CountryCard/>
                </Col>

                <Col sm="12" md={{ size: 6, offset: 0.1 }}>
                    <CountryCard/>
                </Col>

              </Row>
        </Container>

        <Example/>
        <GlobalCard/>
        </>
    );
};


export default Homepage; 
