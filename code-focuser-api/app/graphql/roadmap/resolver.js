const roadmapResolver = {
  Roadmap: {
    async user(user) {
      console.log(user);
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
    }
  }
};

module.exports = roadmapResolver;
