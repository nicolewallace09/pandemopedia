// page for mutations 
import gql from 'graphql-tag';

// mutation for logged in user
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
            user {
                _id
                username
                email
         }
       }
     }
`;

// mutation to add user 
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
                user {
                    _id
                    username
                    email
                }
            }
        }
`;



// mutation to save U.S. state search
export const SAVE_STATE = gql`
  mutation saveState($input: stateInput!) {
    saveState(input: $input) {
      _id
      name
      savedStates {
        stateId
        name
        confirmed
        newConfirmed
        deaths
        newDeaths
      }
    }
  }
`;



// mutation to remove U.S. state search
export const REMOVE_STATE_SEARCH = gql`
    mutation removeStateSearch($stateId: ID!) {
        removeStateSearch(stateId: $stateId) {
            token
                state {
                    _id
                }

        }
    }
`;