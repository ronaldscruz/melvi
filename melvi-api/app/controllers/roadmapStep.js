const { RoadmapStep, Roadmap } = require("../models");

class RoadmapStepController {
  async getRoadmapSteps(roadmapId, session) {
    if (!session) throw new Error("You don't have permission to retrieve RoadmapSteps");

    const targetRoadmap = await Roadmap.findByPk(roadmapId);
    if (!targetRoadmap) throw new Error("Invalid roadmap.");

    if (targetRoadmap.userId !== session.user.id)
      throw new Error("You can't get RoadmapSteps from another user.");

    const roadmapSteps = await RoadmapStep.findAll({ where: { roadmapId } });
    if (!roadmapSteps) throw new Error("Nothing found.");

    return roadmapSteps;
  }

  async createRoadmapStep(data, session) {
    if (!session) throw new Error("You don't have permission to create a RoadmapStep");

    const { title, body, icon, roadmapId } = data;

    const targetRoadmap = await Roadmap.findByPk(roadmapId);
    if (!targetRoadmap) throw new Error("Invalid roadmap.");

    if (targetRoadmap.userId !== session.user.id)
      throw new Error("You can't create a RoadmapStep for another user.");

    const createdRoadmapStep = await RoadmapStep.create({
      title,
      body,
      icon,
      roadmapId
    });
    if (!createdRoadmapStep) throw new Error("Failed creating Roadmap Step.");

    return createdRoadmapStep;
  }

  async updateRoadmapStep(newRoadmapStepData, session) {
    if (!session) throw new Error("You don't have permission to update a RoadmapStep");

    const { id, title, body, icon, roadmapId } = newRoadmapStepData;

    const targetRoadmap = await Roadmap.findByPk(roadmapId);
    if (!targetRoadmap) throw new Error("Invalid roadmap.");

    if (targetRoadmap.userId !== session.user.id)
      throw new Error("You can't update a RoadmapStep from another user.");

    const updatedRoadmapStep = await RoadmapStep.update(
      {
        title,
        body,
        icon,
        roadmapId,
        updatedAt: Date.now()
      },
      { where: { id } }
    );
    if (!updatedRoadmapStep) throw new Error("Failed updating Roadmap Step.");

    const newRoadmapStep = await RoadmapStep.findByPk(id);
    if (!newRoadmapStep)
      throw new Error("RoadmapStep updated, but the new one couldn't be returned.");

    return newRoadmapStep;
  }

  async deleteRoadmapStep(id, session) {
    if (!session) throw new Error("You don't have permission to delete a RoadmapStep");

    const roadmapStepToBeDeleted = await RoadmapStep.findByPk(id);
    if (!roadmapStepToBeDeleted) throw new Error("Nothing to be deleted.");

    const targetRoadmap = await Roadmap.findByPk(roadmapStepToBeDeleted.roadmapId);
    if (!targetRoadmap) throw new Error("Invalid roadmap.");

    if (targetRoadmap.userId !== session.user.id)
      throw new Error("You can't delete a RoadmapStep from another user.");

    const hasBeenDeleted = await RoadmapStep.destroy({ where: { id } });
    if (!hasBeenDeleted) throw new Error("Failed removing RoadmapStep.");

    return roadmapStepToBeDeleted;
  }
}

module.exports = new RoadmapStepController();
