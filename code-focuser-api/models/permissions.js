module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
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
  Permission.associate = function() {};
  return Permission;
};
