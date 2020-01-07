const roadmapResolver = {
  Roadmap: {
    async user(user) {
      return user.getUser();
    }
  },

  Query: {
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
    }
  }
};

module.exports = roadmapResolver;
