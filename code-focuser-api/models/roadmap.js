"use strict";
module.exports = (sequelize, DataTypes) => {
  const Roadmap = sequelize.define(
    "Roadmap",
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 70]
        }
      },
      description: {
        type: DataTypes.STRING
      },
      icon: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Roadmap.associate = function(models) {
    Roadmap.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Roadmap;
};
