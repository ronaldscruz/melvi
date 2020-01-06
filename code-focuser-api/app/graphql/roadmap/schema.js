const {
  gql
} = require("apollo-server-express");

const roadmapType = gql `
  type Roadmap {
    id: Int!
    title: String!
    description: String
    icon: String
    user: User!
  }
`;

module.exports = roadmapType;