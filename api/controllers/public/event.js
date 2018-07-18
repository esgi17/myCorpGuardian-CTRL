const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Event = ModelIndex.Event;

const Op = ModelIndex.sequelize.Op;

const EventController = function() { };

/**
*  Creation d'un Event en base
**/
EventController.add = function( date, data, device_id ) {
    return Event.create({
        date: date,
        data: data,
        device_id: device_id
    });
};

/**
* Suppression d'un Event en base
**/
EventController.delete = function(id) {
  return Event.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un Event en base
**/
EventController.update = function( id, date, data, device_id ) {
    return Event.update({
      date: date,
      data: data,
      device_id: device_id
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
EventController.getAll = function (id) {
    const options = {
      include: [{
        model: ModelIndex.Device,
        as : 'device'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return Event.findAll(options);
};


// Export du controller
module.exports = EventController;
