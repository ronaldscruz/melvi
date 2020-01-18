const User = require("../../controllers/user");

const userResolver = {
  User: {
    async permission(permission) {
      return permission.getPermission();
    }
  },

  Query: {
    getUser: (root, { id }, { session }) => User.getUser(id, session),
    getUsers: (root, args, { session }) => User.getUsers(session)
  },

  Mutation: {
    login: (root, { email, password }) => User.login(email, password),
    createUser: (root, data) => User.createUser(data),
    updateUser: (root, data, { session }) => User.updateUser(data, session),
    deleteUser: (root, { id }, { session }) => User.deleteUser(id, session)
  }
};

module.exports = userResolver;
