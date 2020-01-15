/* eslint-disable no-console */
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Importing GraphQL and DB stuff (typeDefs, resolvers, models)
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const models = require("../models");

const port = 4500;

// Passing our GraphQL and DB stuff to ApolloServer
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

const app = express();
server.applyMiddleware({ app });

// Syncing DB with Models
models.sequelize
  .authenticate()
  .then(() => console.log("[DATABASE] Authenticated."))
  .catch(err => console.error("[DATABASE] Failed authenticating:", err));

models.sequelize
  .sync()
  .then(() => console.log("[DATABASE] Models synced."))
  .catch(err => console.error("[DATABASE] Failed syncing Models:", err));

app.listen({ port }, () => {
  console.log("[SERVER] Running at:", port);
});
