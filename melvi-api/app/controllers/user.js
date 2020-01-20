const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../../config/auth");

const { User, Permission } = require("../models");

class UserController {
  async login(email, password) {
    const validUser = await User.findOne({
      where: { email },
      include: [{ model: Permission }]
    });

    if (!validUser) throw new Error("Invalid authentication credentials.");

    const isPasswordValid = await bcrypt.compare(password, validUser.password);

    if (!isPasswordValid) throw new Error("Invalid authentication credentials.");

    const {
      id,
      fullName,
      dateOfBirth,
      Permission: permission,
      createdAt,
      updatedAt
    } = validUser;

    const token = jwt.sign(
      {
        user: { id, fullName, dateOfBirth, email, permission, createdAt, updatedAt }
      },
      jwtSecret,
      {
        expiresIn: 3600
      }
    );

    if (!token) throw new Error("Failed generating token.");

    return token;
  }

  async getUser(id, session) {
    if (
      !session ||
      (session.user.permission.name !== "Developer" && session.user.id !== id)
    )
      throw new Error("You don't have permission to retrieve users.");

    const user = await User.findByPk(id);
    if (!user) throw new Error("No users found with this ID.");

    return user;
  }

  async getUsers(session) {
    if (!session || session.user.permission.name !== "Developer")
      throw new Error("You don't have permission to retrieve users.");

    const users = await User.findAll();
    if (!users) throw new Error("No users found.");

    return User.findAll();
  }

  async createUser({ fullName, dateOfBirth, email, password, permissionId }) {
    const encryptedPassword = await bcrypt.hash(password, 10);
    if (!encryptedPassword) throw new Error("Failed encrypting password.");

    const newUser = User.create({
      fullName,
      dateOfBirth,
      email,
      password: encryptedPassword,
      permissionId
    });

    if (!newUser) throw new Error("Failed creating new user.");

    return newUser;
  }

  async updateUser(data, session) {
    const { id, fullName, dateOfBirth, email, permissionId } = data;
    let { password } = data;

    if (
      !session ||
      (session.user.permission.name !== "Developer" && session.user.id !== id)
    )
      throw new Error("You don't have permission to update this user.");

    if (password) {
      const newPassword = await bcrypt.hash(password, 10);
      if (!newPassword) throw new Error("Failed encrypting new password.");

      password = newPassword;
    }

    const userUpdated = await User.update(
      { fullName, dateOfBirth, email, password, permissionId, updatedAt: Date.now() },
      { where: { id } }
    );

    if (!userUpdated) throw new Error("Failed updating user.");

    const userWithNewData = await User.findByPk(id);

    if (!userWithNewData)
      throw new Error("User updated, but failed retrieving it's new data.");

    return userWithNewData;
  }

  async deleteUser(id, session) {
    if (
      !session ||
      (session.user.permission.name !== "Developer" && session.user.id !== id)
    )
      throw new Error("You don't have permission to delete this user.");

    const userToBeDeleted = await User.findByPk(id);
    if (!userToBeDeleted) throw new Error("No users with this ID found.");

    const userDeleted = await User.destroy({ where: { id } });
    if (!userDeleted) throw new Error("Failed removing user.");

    return userToBeDeleted;
  }
}

module.exports = new UserController();
