/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

/**
 * Use it inside "index.js" to require all other files on your folder
 */
module.exports = function requireSiblings() {
  return require("fs")
    .readdirSync(__dirname)
    .forEach(function(file) {
      if (file.match(/\.js$/) !== null && file !== "index.js") {
        const name = file.replace(".js", "");
        exports[name] = require(`./${file}`);
      }
    });
};
