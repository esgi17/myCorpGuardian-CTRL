const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Captor = ModelIndex.Captor;

const Op = ModelIndex.sequelize.Op;

const CaptorController = function() { };

/**
*  Creation d'un Captor en base
**/
CaptorController.add = function( ip, type, description ) {
    return Captor.create({
        ip: ip,
        type: type,
        description: description
    });
};

/**
* Suppression d'un Captor en base
**/
CaptorController.delete = function(id) {
  return Captor.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un Captor en base
**/
CaptorController.update = function( id, ip, type, description ) {
    return Captor.update({
      ip: ip,
      type: type,
      description: description
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
CaptorController.getAll = function (id) {
    const options = {};
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return Captor.findAll(options);
};


// Export du controller
module.exports = CaptorController;
