const { merge } = require("lodash");

const userResolver = require("./user/resolver");
const roadmapResolver = require("./roadmap/resolver");
const roadmapStepResolver = require("./roadmapStep/resolver");

const rootResolver = {
  Query: {},

  Mutation: {}
};

const resolvers = merge(rootResolver, userResolver, roadmapResolver, roadmapStepResolver);

module.exports = resolvers;
