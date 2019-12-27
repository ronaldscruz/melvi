const resolvers = {
  Roadmap: {
    async user(user) {
      return user.getUser();
    }
  },

  Query: {
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    },

    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    },

    async getRoadmaps(root, { userId }, { models }) {
      return models.Roadmap.findAll({
         where: { userId } 
      });
    },

  },

  Mutation: {
    async createUser(root, { fullName, dateOfBirth, email, password }, { models }) {
      return models.User.create({
        fullName, dateOfBirth, email, password
      });
    },

    async createRoadmap(root, { title, description, icon, userId }, { models }) {
      return models.Roadmap.create({
        title, description, icon, userId
      });
    }
  },
}

module.exports = resolvers;