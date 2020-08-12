import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// apollo provider 
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// components and pages
import Navbar from './components/Navbar';

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
            {/* <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} /> */}
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
