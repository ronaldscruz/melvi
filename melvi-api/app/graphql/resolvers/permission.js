const Permission = require("../../controllers/permission");

const permissionResolver = {
  Query: {
    getPermissions: () => Permission.getPermissions(),

    getPermission: (root, { id }) => Permission.getPermission(id)
  },

  Mutation: {
    createPermission: (root, { name }, { session }) =>
      Permission.createPermission({ name }, session),

    updatePermission: (root, data, { session }) =>
      Permission.updatePermission(data, session),

    deletePermission: (root, { id }, { session }) =>
      Permission.deletePermission(id, session)
  }
};

module.exports = permissionResolver;
