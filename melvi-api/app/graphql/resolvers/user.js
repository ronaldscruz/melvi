const User = require("../../controllers/user");

const userResolver = {
  User: {
    async permission(permission) {
      return permission.getPermission();
    }
  },

  Query: {
    login: (root, { email, password }) => User.login(email, password),
    me: (root, args, { session }) => User.me(session),
    getUser: (root, { id }, { session }) => User.getUser(id, session),
    getUsers: (root, args, { session }) => User.getUsers(session)
  },

  Mutation: {
    createUser: (root, data) => User.createUser(data),
    updateUser: (root, data, { session }) => User.updateUser(data, session),
    deleteUser: (root, { id }, { session }) => User.deleteUser(id, session)
  }
};

module.exports = userResolver;
