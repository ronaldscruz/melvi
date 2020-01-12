module.exports = (sequelize, DataTypes) => {
  const Permissions = sequelize.define(
    "Permissions",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [1, 32],
            msg: "Your permission should have between 1 and 32 characters."
          }
        }
      }
    },
    {}
  );
  Permissions.associate = function(models) {
    Permissions.belongsTo(models.User({ foreignKey: "permissionLevel" }));
  };
  return Permissions;
};
