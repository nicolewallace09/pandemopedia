// page for queries
import gql from 'graphql-tag';

// queries for logged in users
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      stateCount
      savedStateSearch {
        name
        confirmed
        newConfirmed
        deaths
        newDeaths
      }
    }
  }
`;


