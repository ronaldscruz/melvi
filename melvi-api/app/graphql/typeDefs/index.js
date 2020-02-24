const { gql } = require("apollo-server-express");
const requireSiblings = require("../../utils/filesUtils");

const rootSchema = gql`
  type Query {
    login(email: String!, password: String!): Login!
    me: User!

    getUser(id: Int!): User!
    getUsers: [User!]!

    getPermission(id: Int!): Permission!
    getPermissions: [Permission!]!

    roadmaps(userId: Int!): [Roadmap!]!
    roadmap(id: Int!): Roadmap!

    roadmapsteps(roadmapId: Int!): [RoadmapStep!]!
  }

  type Mutation {
    # USER
    createUser(
      fullName: String!
      dateOfBirth: String!
      email: String!
      password: String!
      permissionId: Int!
    ): User!

    updateUser(
      id: Int!
      fullName: String
      dateOfBirth: String
      email: String
      password: String
      permissionId: Int
    ): User!

    deleteUser(id: Int!): User!

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
