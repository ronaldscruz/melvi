const RoadmapStep = require("../../controllers/roadmapStep");

const roadmapStepResolver = {
  RoadmapStep: {
    async roadmap(roadmap) {
      return roadmap.getRoadmap();
    }
  },

  Query: {
    getRoadmapSteps: (root, { roadmapId }, { session }) =>
      RoadmapStep.getRoadmapSteps(roadmapId, session)
  },

  Mutation: {
    createRoadmapStep: (root, { title, body, icon, roadmapId }, { session }) =>
      RoadmapStep.createRoadmapStep({ title, body, icon, roadmapId }, session),

    updateRoadmapStep: (root, data, { session }) =>
      RoadmapStep.updateRoadmapStep(data, session),

    deleteRoadmapStep: (root, { id }, { session }) =>
      RoadmapStep.deleteRoadmapStep(id, session)
  }
};

module.exports = roadmapStepResolver;
