const { Roadmap } = require("../models");

class RoadmapController {
  async roadmap(id, session) {
    if (!session) throw new Error("You don't have permission to retrieve a Roadmap.");

    const roadmap = await Roadmap.findByPk(id);
    if (!roadmap) throw new Error("Nothing found.");

    if (roadmap.userId !== session.user.id)
      throw new Error("You can't get a roadmap from another user.");

    return roadmap;
  }

  async roadmaps(userId, session) {
    if (!session) throw new Error("You don't have permission to retrieve Roadmaps.");

    if (userId !== session.user.id)
      throw new Error("You can't get roadmaps from another user.");

    const roadmaps = await Roadmap.findAll({ where: { userId } });
    if (!roadmaps) throw new Error("Nothing found.");

    return roadmaps;
  }

  async createRoadmap(data, session) {
    const { title, description, icon, userId } = data;

    if (!session) throw new Error("You don't have permission to create a Roadmap.");

    if (userId !== session.user.id)
      throw new Error("You can't create a roadmap for another user.");

    const createdRoadmap = await Roadmap.create({ title, description, icon, userId });
    if (!createdRoadmap) throw new Error("Failed creating Roadmap.");

    return createdRoadmap;
  }

  async updateRoadmap(data, session) {
    const { id, title, description, icon, userId } = data;

    if (!session) throw new Error("You don't have permission to update a Roadmap.");

    if (userId !== session.user.id)
      throw new Error("You can't update a roadmap for another user.");

    const updatedRoadmap = await Roadmap.update(
      { title, description, icon, userId, updatedAt: Date.now() },
      { where: { id } }
    );
    if (!updatedRoadmap) throw new Error("Failed updating roadmap.");

    const newRoadmap = await this.roadmap(id, session);

    return newRoadmap;
  }

  async deleteRoadmap(id, session) {
    if (!session) throw new Error("You don't have permission to delete a Roadmap.");

    const roadmapToBeDeleted = await Roadmap.findByPk(id);
    if (!roadmapToBeDeleted) throw new Error("Nothing to be deleted.");

    if (roadmapToBeDeleted.userId !== session.user.id)
      throw new Error("You can't delete a roadmap from another user.");

    const hasBeenDeleted = Roadmap.destroy({ where: { id } });
    if (!hasBeenDeleted) throw new Error("Failed removing roadmap.");

    return roadmapToBeDeleted;
  }
}

module.exports = new RoadmapController();
