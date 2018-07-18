module.exports = function (sequelize, DataTypes) {
    const Captor = sequelize.define('Captor', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Captor.associate = _associate;
    return Captor;
}

// INTERNAL

function _associate(models) {
    models.Captor.belongsTo(models.Device, {
      as : 'device'
    });
}
