const { merge } = require("lodash");

const userResolver = require("./user");
const roadmapResolver = require("./roadmap");
const roadmapStepResolver = require("./roadmapStep");

const rootResolver = {
  Query: {},

  Mutation: {}
};

const resolvers = merge(rootResolver, userResolver, roadmapResolver, roadmapStepResolver);

module.exports = resolvers;
