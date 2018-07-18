module.exports = function (sequelize, DataTypes) {
    const DeviceType = sequelize.define('DeviceType', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    // User.associate = _associate;
    return DeviceType;
}

// INTERNAL

function _associate(models) {

}
