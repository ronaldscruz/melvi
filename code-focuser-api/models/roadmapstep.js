module.exports = (sequelize, DataTypes) => {
  const RoadmapStep = sequelize.define(
    "RoadmapStep",
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "The title can't be empty."
          }
        }
      },

      body: {
        type: DataTypes.TEXT
      },

      icon: {
        type: DataTypes.STRING
      },

      roadmapId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "The Roadmap ID can't be empty."
          }
        }
      },

      done: {
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  RoadmapStep.associate = function(models) {
    RoadmapStep.belongsTo(models.Roadmap, { foreignKey: "roadmapid" });
  };
  return RoadmapStep;
};
