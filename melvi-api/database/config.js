require("dotenv").config();

const operatorsAliases = false;
const dialect = "mysql";

module.exports = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    dialect,
    operatorsAliases
  },
  test: {
    username: process.env.STAGE_DB_USER,
    password: process.env.STAGE_DB_PASS,
    database: process.env.STAGE_DB_NAME,
    host: process.env.STAGE_DB_HOST,
    dialect,
    operatorsAliases
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    dialect,
    operatorsAliases
  }
};
