const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const models = require('../models');

const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

const app = express();
server.applyMiddleware({ app });

models.sequelize.authenticate()
  .then(() => console.log("[DATABASE] Authenticated."))
  .catch(err => console.error("[DATABASE] Failed authenticating:", err));

models.sequelize.sync()
  .then(() => console.log("[DATABASE] Models synced."))
  .catch(err => console.error("[DATABASE] Failed syncing Models:", err));

app.listen({ port }, () => {
  console.log("[SERVER] Running at:", port);
})