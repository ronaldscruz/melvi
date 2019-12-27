const { merge } = require("lodash");

const userResolver = require('./user');
const roadmapResolver = require('./roadmap');

const rootResolver = {
  Query: {

  },

  Mutation: {

  },
}

const resolvers = merge(
  rootResolver,
  userResolver,
  roadmapResolver,
);

module.exports = resolvers;