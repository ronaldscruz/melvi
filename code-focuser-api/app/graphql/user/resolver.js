const userResolver = {
  Query: {
    async getUser(root, {
      id
    }, {
      models
    }) {
      return models.User.findByPk(id);
    },

    async getAllUsers(root, args, {
      models
    }) {
      return models.User.findAll();
    },
  },

  Mutation: {
    async createUser(root, {
      fullName,
      dateOfBirth,
      email,
      password
    }, {
      models
    }) {
      return models.User.create({
        fullName,
        dateOfBirth,
        email,
        password
      });
    },
  },
};

module.exports = userResolver;