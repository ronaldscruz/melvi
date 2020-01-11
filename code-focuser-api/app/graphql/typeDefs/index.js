const { gql } = require("apollo-server-express");

const userType = require("./user");
const roadmapType = require("./roadmap");
const roadmapStepType = require("./roadmapStep");

const rootSchema = gql`
  type Query {
    getUser(id: Int!): User!
    getUsers: [User!]!

    getRoadmaps(userId: Int!): [Roadmap!]!
    getRoadmap(id: Int!): Roadmap!

    getRoadmapSteps(roadmapId: Int!): [RoadmapStep!]!
  }

  type Mutation {
    createUser(
      fullName: String!
      dateOfBirth: String!
      email: String!
      password: String!
    ): User!

    createRoadmap(
      title: String!
      description: String
      icon: String
      userId: Int!
    ): Roadmap!

    createRoadmapStep(
      title: String!
      body: String
      icon: String
      roadmapId: Int!
      done: Boolean
    ): RoadmapStep!
  }
`;

module.exports = [rootSchema, userType, roadmapType, roadmapStepType];
