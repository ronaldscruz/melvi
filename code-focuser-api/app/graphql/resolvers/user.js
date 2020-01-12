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

      await models.User.update(
        { fullName, dateOfBirth, email, password, permissionId, updatedAt: Date.now() },
        { where: { id } }
      );

      return models.User.findByPk(id);
    },

    async deleteUser(root, { id }, { models }) {
      const deleted = await models.User.findByPk(id);

      await models.User.destroy({ where: { id } });

      return deleted;
    }
  }
};

module.exports = userResolver;
