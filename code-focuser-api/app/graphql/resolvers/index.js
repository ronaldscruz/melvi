const { merge } = require("lodash");
const requireSiblings = require("../../utils/filesUtils");

const rootResolver = {
  Query: {},

  Mutation: {}
};

const addedResolvers = requireSiblings(__dirname);
const resolvers = merge(rootResolver, ...addedResolvers);

module.exports = resolvers;
