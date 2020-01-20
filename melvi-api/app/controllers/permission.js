const { Permission } = require("../models");

class PermissionController {
  async getPermissions() {
    const permissions = await Permission.findAll();

    if (!permissions) throw new Error("No Permission found.");

    return permissions;
  }

  async getPermission(id) {
    const permission = await Permission.findByPk(id);

    if (!permission) throw new Error("No Permission found.");

    return permission;
  }

  async createPermission({ name }, session) {
    if (!session || session.user.permission.name !== "Developer")
      throw new Error("You don't have permission to create a Permission.");

    const createdPermission = await Permission.create({ name });
    if (!createdPermission) throw new Error("Failed creating new Permission.");

    return Permission.create({ name });
  }

  async updatePermission(newPermissionData, session) {
    if (!session || session.user.permission.name !== "Developer")
      throw new Error("You don't have permission to update Permissions entity.");

    const { id, name } = newPermissionData;

    const updated = await Permission.update(
      { name, updatedAt: Date.now() },
      { where: { id } }
    );

    if (!updated) throw new Error("Failed updating Permission ID:", id);

    return this.getPermission(id);
  }

  async deletePermission(id, session) {
    if (!session || session.user.permission.name !== "Developer")
      throw new Error("You don't have permission to delete a Permission.");

    const permissionToBeDeleted = await Permission.findByPk(id);
    if (!permissionToBeDeleted) throw new Error("Nothing to delete.");

    const deleted = await Permission.destroy({ where: { id } });
    if (!deleted) throw new Error("Failed removing Permission.");

    return permissionToBeDeleted;
  }
}

module.exports = new PermissionController();
