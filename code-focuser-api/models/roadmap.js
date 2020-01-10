"use strict";
module.exports = (sequelize, DataTypes) => {
  const Roadmap = sequelize.define(
    "Roadmap",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            msg: "Your title reached the character limit (70).",
            args: [1, 70]
          }
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
