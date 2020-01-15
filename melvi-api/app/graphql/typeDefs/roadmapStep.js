const { gql } = require("apollo-server-express");

const roadmapStepType = gql`
  type RoadmapStep {
    id: ID!
    title: String!
    body: String!
    icon: String!
    roadmap: Roadmap!
    done: Boolean!
  }
`;

module.exports = roadmapStepType;
