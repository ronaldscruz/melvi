/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const glob = require("glob");
const path = require("path");

/**
 * Use it inside "index.js" to require all other files on your folder
 *
 * @param {String} dirname Literally the "__dirname" var
 */
module.exports = function requireSiblings(dirname) {
  const importResults = [];

  glob.sync(path.resolve(dirname, "**/*.js")).forEach(file => {
    if (file.split("/").pop() !== "index.js")
      importResults.push(require(path.resolve(file)));
  });

  return importResults;
};
