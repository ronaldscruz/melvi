const { gql } = require("apollo-server-express");

const permissionType = gql`
  type Permission {
    id: ID!
    name: String!
  }
`;

module.exports = permissionType;
