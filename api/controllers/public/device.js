const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Device = ModelIndex.Device;

const Op = ModelIndex.sequelize.Op;

const DeviceController = function() { };

/**
*  Creation d'un Device en base
**/
DeviceController.add = function() {
    return Device.create({
    });
};

/**
* Suppression d'un Device en base
**/
DeviceController.delete = function(id) {
  return Device.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Récupération des élements en base
**/
DeviceController.getAll = function (id) {
    const options = {
      include: [{
        model: ModelIndex.DeviceType,
        as : 'deviceType'
      },
      {
        model: ModelIndex.Pass,
        as : 'pDevice'
      },
      {
        model: ModelIndex.Door,
        as : 'dDevice'
      },
      {
        model: ModelIndex.Captor,
        as : 'cDevice'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return Device.findAll(options);
};


// Export du controller
module.exports = DeviceController;
