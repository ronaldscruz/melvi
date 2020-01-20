const Roadmap = require("../../controllers/roadmap");

const roadmapResolver = {
  Roadmap: {
    async user(user) {
      return user.getUser();
    }
  },

  Query: {
    getRoadmap: (root, { id }, { session }) => Roadmap.getRoadmap(id, session),
    getRoadmaps: (root, { userId }, { session }) => Roadmap.getRoadmaps(userId, session)
  },

  Mutation: {
    createRoadmap: (root, { title, description, icon, userId }, { session }) =>
      Roadmap.createRoadmap({ title, description, icon, userId }, session),

    updateRoadmap: (root, data, { session }) => Roadmap.updateRoadmap(data, session),
    deleteRoadmap: (root, { id }, { session }) => Roadmap.deleteRoadmap(id, session)
  }
};

module.exports = roadmapResolver;
