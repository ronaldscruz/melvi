module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: {
        type: DataTypes.STRING,
        validate: {
          len: {
            msg: "Your name should have at least 2 characters.",
            args: [2, 120]
          }
        }
      },
      dateOfBirth: {
        type: DataTypes.DATE
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Please enter a valid e-mail",
            args: true
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            msg: "Your password should have a length between 6 and 24 characters",
            args: [6, 24]
          }
        }
      },
      permissionId: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.Permission, { foreignKey: "permissionId" });
  };
  return User;
};
