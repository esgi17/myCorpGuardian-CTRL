module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstname : {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname : {
            type: DataTypes.STRING,
            allowNull: false
        },
        job : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    User.associate = _associate;
    return User;
}

// INTERNAL

function _associate(models) {
    models.User.belongsTo(models.Group, {
      as : 'group'
    });
}
