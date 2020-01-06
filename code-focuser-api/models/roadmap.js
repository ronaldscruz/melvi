"use strict";
module.exports = (sequelize, DataTypes) => {
  const Roadmap = sequelize.define(
    "Roadmap",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      icon: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {}
  );
  Roadmap.associate = function(models) {
    Roadmap.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Roadmap;
};
