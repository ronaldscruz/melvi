const userResolver = {
  User: {
    async permission(permission) {
      return permission.getPermission();
    }
  },

  Query: {
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    },

    async getUsers(root, args, { models }) {
      return models.User.findAll();
    }
  },

  Mutation: {
    async createUser(
      root,
      { fullName, dateOfBirth, email, password, permissionId },
      { models }
    ) {
      return models.User.create({
        fullName,
        dateOfBirth,
        email,
        password,
        permissionId
      });
    }
  }
};

module.exports = userResolver;
