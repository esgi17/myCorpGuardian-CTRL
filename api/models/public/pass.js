module.exports = function (sequelize, DataTypes) {
    const Pass = sequelize.define('Pass', {
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
    Pass.associate = _associate;
    return Pass;
}

// INTERNAL

function _associate(models) {
    models.Pass.belongsTo(models.User, {
        as : 'user'
    });
    models.Pass.belongsTo(models.Device, {
      as : 'device'
    });
}
