const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    fullName: String!
    dateOfBirth: String!
    email: String!
    password: String!
  }

  type Roadmap {
    id: Int!
    title: String!
    description: String
    icon: String
    user: User!
  }

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

module.exports = typeDefs;