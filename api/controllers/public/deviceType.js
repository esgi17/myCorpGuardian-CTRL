const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const DeviceType = ModelIndex.DeviceType;

const Op = ModelIndex.sequelize.Op;

const DeviceTypeController = function() { };

/**
*  Creation d'un DeviceType en base
**/
DeviceTypeController.add = function(name) {
    return DeviceType.create({
        name: name
    });
};

/**
* Suppression d'un DeviceType en base
**/
DeviceTypeController.delete = function(id) {
  return DeviceType.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un DeviceType en base
**/
DeviceTypeController.update = function( id, name ) {
    return DeviceType.update({
        name: name
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
DeviceTypeController.getAll = function (id) {
    const options = {};
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return DeviceType.findAll(options);
};


// Export du controller
module.exports = DeviceTypeController;
