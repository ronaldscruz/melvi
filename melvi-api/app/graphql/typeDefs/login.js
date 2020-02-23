const { gql } = require("apollo-server-express");

const loginType = gql`
  type Login {
    token: String!
  }
`;

module.exports = loginType;
