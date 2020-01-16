const { gql } = require("apollo-server-express");
const requireSiblings = require("../../utils/filesUtils");

const rootSchema = gql`
  type Query {
    getUser(id: Int!): User!
    getUsers: [User!]!

    getPermission(id: Int!): Permission!
    getPermissions: [Permission!]!

    getRoadmaps(userId: Int!): [Roadmap!]!
    getRoadmap(id: Int!): Roadmap!

    getRoadmapSteps(roadmapId: Int!): [RoadmapStep!]!
  }

  type Mutation {
    # USER
    createUser(
      fullName: String!
      dateOfBirth: String!
      email: String!
      password: String!
      permissionId: Int!
    ): User

    updateUser(
      id: Int!
      fullName: String
      dateOfBirth: String
      email: String
      password: String
      permissionId: Int
    ): User!

    deleteUser(id: Int!): User!

    login(email: String!, password: String!): String!

    # PERMISSION
    createPermission(name: String!): Permission!
    updatePermission(id: Int!, name: String): Permission!
    deletePermission(id: Int!): Permission!

    # ROADMAP
    createRoadmap(
      title: String!
      description: String
      icon: String
      userId: Int!
    ): Roadmap!

    updateRoadmap(
      id: Int!
      title: String
      description: String
      icon: String
      userId: Int
    ): Roadmap!

    deleteRoadmap(id: Int!): Roadmap!

    # ROADMAPSTEP
    createRoadmapStep(
      title: String!
      body: String
      icon: String
      roadmapId: Int!
      done: Boolean
    ): RoadmapStep!

    updateRoadmapStep(
      id: Int!
      title: String
      body: String
      icon: String
      roadmapId: Int
      done: Boolean
    ): RoadmapStep!

    deleteRoadmapStep(id: Int!): RoadmapStep!
  }
`;

const addedTypes = requireSiblings(__dirname);

module.exports = [rootSchema, ...addedTypes];
