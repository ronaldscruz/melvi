const { gql } = require("apollo-server-express");

const userType = require("./user/schema");
const roadmapType = require("./roadmap/schema");

const rootSchema = gql`
  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]!

    getRoadmaps(userId: Int!): [Roadmap!]!
  }

  type Mutation {
    createUser(fullName: String!, dateOfBirth: String!, email: String!, password: String!): User!
    createRoadmap(title: String!, description: String, icon: String, userId: Int!): Roadmap!
  }
`;

module.exports = [rootSchema, userType, roadmapType];