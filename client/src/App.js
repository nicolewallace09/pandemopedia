import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// apollo provider 
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// components and pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

// establish apollo client
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            {/*<Route exact path='/saved' component={SavedBooks} /> */}
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>
          <Footer/>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
