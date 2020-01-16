const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userResolver = {
  User: {
    async permission(permission) {
      return permission.getPermission();
    }
  },

  Query: {
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    },

    async getUsers(root, args, { models, session }) {
      console.log("Session found: ", session);
      return models.User.findAll();
    }
  },

  Mutation: {
    async login(root, { email, password }, { models }) {
      let token = "";

      const validUser = await models.User.findOne({
        where: { email },
        include: [{ model: models.Permission }]
      });

      if (!validUser) return token;

      const isPasswordValid = await bcrypt.compare(password, validUser.password);

      if (isPasswordValid) {
        const {
          id,
          fullName,
          dateOfBirth,
          Permission: permission,
          createdAt,
          updatedAt
        } = validUser;

        token = jwt.sign(
          {
            user: { id, fullName, dateOfBirth, email, permission, createdAt, updatedAt }
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 3600
          }
        );
      }

      return token;
    },

    async createUser(
      root,
      { fullName, dateOfBirth, email, password, permissionId },
      { models }
    ) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      if (encryptedPassword) {
        return models.User.create({
          fullName,
          dateOfBirth,
          email,
          password: encryptedPassword,
          permissionId
        });
      }

      return false;
    },

    async updateUser(root, data, { models }) {
      const { id, fullName, dateOfBirth, email, password, permissionId } = data;

      await models.User.update(
        { fullName, dateOfBirth, email, password, permissionId, updatedAt: Date.now() },
        { where: { id } }
      );

      return models.User.findByPk(id);
    },

    async deleteUser(root, { id }, { models }) {
      const deleted = await models.User.findByPk(id);

      await models.User.destroy({ where: { id } });

      return deleted;
    }
  }
};

module.exports = userResolver;
