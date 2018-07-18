const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Schedule = ModelIndex.Schedule;
const Op = ModelIndex.sequelize.Op;

const ScheduleController = function() { };

/**
*  Creation d'un Schedule en base
**/
ScheduleController.add = function( h_start, h_stop, day, door_id, group_id ) {
    return Schedule.create({
        h_start: h_start,
        h_stop: h_stop,
        day: day,
        door_id: door_id,
        group_id: group_id
    });
};

/**
* Suppression d'un Schedule en base
**/
ScheduleController.delete = function(id) {
  return Schedule.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un Schedule en base
**/
ScheduleController.update = function( id, h_start, h_stop, day, door_id, group_id ) {
    return Schedule.update({
        h_start: h_start,
        h_stop: h_stop,
        day: day,
        door_id: door_id,
        group_id: group_id
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
ScheduleController.getAll = function (id) {
    const options = {
      include: [{
        model: ModelIndex.Group,
        as : 'group'
      },
      {
        model: ModelIndex.Door,
        as : 'door'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return Schedule.findAll(options);
};

ScheduleController.getOne = function ( id_door) {
    const options = {
      include: [{
        model: ModelIndex.Group,
        as : 'group'
      },
      {
        model: ModelIndex.Door,
        as : 'door'
      }]
    };
    const where = {
      'door_id' : id_door
    };

    /*if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }*/
    options.where = where;
    return Schedule.findOne(options);
};

// Export du controller
module.exports = ScheduleController;
