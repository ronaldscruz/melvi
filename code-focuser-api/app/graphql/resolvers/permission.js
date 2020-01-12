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
    },

    async updatePermission(root, data, { models }) {
      const { id, name } = data;
      return models.Permission.update({ name, updatedAt: Date.now() }, { where: { id } });
    },

    async deletePermission(root, { id }, { models }) {
      return models.Permission.destroy({ where: { id } });
    }
  }
};

module.exports = permissionResolver;
