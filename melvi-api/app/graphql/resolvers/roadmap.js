const roadmapResolver = {
  Roadmap: {
    async user(user) {
      return user.getUser();
    }
  },

  Query: {
    async getRoadmap(root, { id }, { models }) {
      return models.Roadmap.findByPk(id);
    },

    async getRoadmaps(root, { userId }, { models }) {
      return models.Roadmap.findAll({
        where: {
          userId
        }
      });
    }
  },

  Mutation: {
    async createRoadmap(root, { title, description, icon, userId }, { models }) {
      return models.Roadmap.create({
        title,
        description,
        icon,
        userId
      });
    },

    async updateRoadmap(root, data, { models }) {
      const { id, title, description, icon, userId } = data;

      await models.Roadmap.update(
        { title, description, icon, userId, updatedAt: Date.now() },
        { where: { id } }
      );

      return models.Roadmap.findByPk(id);
    },

    async deleteRoadmap(root, { id }, { models }) {
      const deleted = await models.Roadmap.findByPk(id);

      await models.Roadmap.destroy({ where: { id } });

      return deleted;
    }
  }
};

module.exports = roadmapResolver;
