const roadmapStepResolver = {
  RoadmapStep: {
    async roadmap(roadmap) {
      console.log(roadmap);
      return roadmap.getRoadmap();
    }
  },

  Query: {
    async getRoadmapSteps(root, { roadmapId }, { models }) {
      return models.RoadmapStep.findAll({
        where: {
          roadmapId
        }
      });
    }
  },

  Mutation: {
    async createRoadmapStep(root, { title, body, icon, roadmapId }, { models }) {
      return models.RoadmapStep.create({
        title,
        body,
        icon,
        roadmapId
      });
    }
  }
};

module.exports = roadmapStepResolver;
