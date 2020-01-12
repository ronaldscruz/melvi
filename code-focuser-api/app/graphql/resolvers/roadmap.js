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
      return models.Roadmap.update(
        {
          title,
          description,
          icon,
          userId,
          updatedAt: Date.now()
        },
        { where: { id } }
      );
    },

    async deleteRoadmap(root, { id }, { models }) {
      return models.Roadmap.destroy({ where: { id } });
    }
  }
};

module.exports = roadmapResolver;
