const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const State = ModelIndex.State;
const Op = ModelIndex.sequelize.Op;

const StateController = function() { };


/**
*  Modification State en base
**/
StateController.update = function( set ) {
    return State.update({
      ArmingSet: set
    },{
      where: {
        id : 1
      }
    });
};

/**
*  Récupération des élements en base
**/
StateController.getAll = function (id) {
    const options = {};
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return State.findAll(options);
};


// Export du controller
module.exports = StateController;
