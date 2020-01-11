const { gql } = require("apollo-server-express");

const userType = gql`
  type User {
    id: ID!
    fullName: String!
    dateOfBirth: String!
    email: String!
    password: String!
  }
`;

module.exports = userType;
