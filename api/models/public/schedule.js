module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define('Schedule', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        h_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        h_stop: {
            type: DataTypes.TIME,
            allowNull: false
        },
        day: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Schedule.associate = _associate;
    return Schedule;
}

// INTERNAL

function _associate(models) {
  models.Schedule.belongsTo(models.Door, {
    as : 'door'
  });
  models.Schedule.belongsTo(models.Group, {
    as : 'group'
  });
}
