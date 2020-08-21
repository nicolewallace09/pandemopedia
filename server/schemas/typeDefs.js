// page for typeDefs
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    stateCount: Int
    savedStateSearch: [State]
  }

  type State {
    name: String
    confirmed: Int
    newConfirmed: Int
    deaths: Int
    newDeaths: Int
    searchId: ID  
}

  type Auth {
    token: ID
    user: User
  }

  input stateInput {
    name: String
    confirmed: Int
    newConfirmed: Int
    deaths: Int
    newDeaths: Int
    searchId: ID
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveStateSearch(input: stateInput): User
    removeStateSearch(stateId: String!): User
  }

  `;

// export the typeDef
module.exports = typeDefs; 