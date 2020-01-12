const permissionResolver = {
  Query: {
    async getPermission(root, { id }, { models }) {
      return models.Permission.findByPk(id);
    },

    async getPermissions(root, args, { models }) {
      return models.Permission.findAll();
    }
  },

  Mutation: {
    async createPermission(root, { name }, { models }) {
      return models.Permission.create({ name });
    }
  }
};

module.exports = permissionResolver;
