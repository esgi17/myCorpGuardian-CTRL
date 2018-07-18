module.exports = function (sequelize, DataTypes) {
    const State = sequelize.define('State', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        ArmingSet: {
            type: DataTypes.BOOLEAN,
            //defaultValue: 1,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    State.associate = _associate;
    return State;
}

// INTERNAL

function _associate(models){

}
