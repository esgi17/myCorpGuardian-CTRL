module.exports = function (sequelize, DataTypes) {
    const Device = sequelize.define('Device', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Device.associate = _associate;
    return Device;
}

// INTERNAL

function _associate(models) {
  models.Device.belongsTo(models.DeviceType, {
    as : 'deviceType'
  });
}
