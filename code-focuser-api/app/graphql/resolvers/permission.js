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

      await models.Permission.update({ name, updatedAt: Date.now() }, { where: { id } });

      return models.Permission.findByPk(id);
    },

    async deletePermission(root, { id }, { models }) {
      const deleted = await models.Permission.findByPk(id);

      await models.Permission.destroy({ where: { id } });

      return deleted;
    }
  }
};

module.exports = permissionResolver;
