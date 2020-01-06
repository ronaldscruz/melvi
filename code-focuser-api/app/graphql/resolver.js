const { merge } = require("lodash");

const userResolver = require("./user/resolver");
const roadmapResolver = require("./roadmap/resolver");

const rootResolver = {
  Query: {},

  Mutation: {}
};

const resolvers = merge(rootResolver, userResolver, roadmapResolver);

module.exports = resolvers;
