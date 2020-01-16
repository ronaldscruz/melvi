const { gql } = require("apollo-server-express");

const authType = gql`
  type Auth {
    token: String!
  }
`;

module.exports = authType;
