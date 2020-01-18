/* eslint-disable no-console */
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Misc libs
const jwt = require("jsonwebtoken");

// Importing GraphQL and DB stuff (typeDefs, resolvers, models)
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const models = require("./models");

const port = process.env.SERVER_PORT;

// Passing our GraphQL and DB stuff to ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    if (req.headers.authorization) {
      const authToken = req.headers.authorization;
      let session = {};

      try {
        session = await jwt.verify(authToken, process.env.JWT_SECRET);
      } catch (err) {
        throw new Error("Failed retrieving token data (malformed token).", err);
      }

      return { session };
    }

    return {};
  }
});

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
