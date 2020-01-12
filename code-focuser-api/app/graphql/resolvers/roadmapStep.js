const roadmapStepResolver = {
  RoadmapStep: {
    async roadmap(roadmap) {
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
    },

    async updateRoadmapStep(root, data, { models }) {
      const { id, title, body, icon, roadmapId } = data;

      return models.RoadmapStep.update(
        {
          title,
          body,
          icon,
          roadmapId,
          updatedAt: Date.now()
        },
        { where: { id } }
      );
    },

    async deleteRoadmapStep(root, { id }, { models }) {
      return models.RoadmapStep.destroy({ where: { id } });
    }
  }
};

module.exports = roadmapStepResolver;
