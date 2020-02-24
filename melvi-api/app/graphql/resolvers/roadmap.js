const Roadmap = require("../../controllers/roadmap");

const roadmapResolver = {
  Roadmap: {
    async user(user) {
      return user.getUser();
    }
  },

  Query: {
    roadmap: (root, { id }, { session }) => Roadmap.roadmap(id, session),
    roadmaps: (root, { userId }, { session }) => Roadmap.roadmaps(userId, session)
  },

  Mutation: {
    createRoadmap: (root, { title, description, icon, userId }, { session }) =>
      Roadmap.createRoadmap({ title, description, icon, userId }, session),

    updateRoadmap: (root, data, { session }) => Roadmap.updateRoadmap(data, session),
    deleteRoadmap: (root, { id }, { session }) => Roadmap.deleteRoadmap(id, session)
  }
};

module.exports = roadmapResolver;
