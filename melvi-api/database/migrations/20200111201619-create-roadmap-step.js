module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RoadmapSteps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.TEXT
      },
      icon: {
        type: Sequelize.STRING
      },
      roadmapId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("RoadmapSteps");
  }
};
