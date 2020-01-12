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
    },

    async updateUser(root, data, { models }) {
      const { id, fullName, dateOfBirth, email, password, permissionId } = data;
      return models.User.update(
        {
          fullName,
          dateOfBirth,
          email,
          password,
          permissionId,
          updatedAt: Date.now()
        },
        { where: { id } }
      );
    },

    async deleteUser(root, { id }, { models }) {
      return models.User.destroy({ where: { id } });
    }
  }
};

module.exports = userResolver;
