const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Group = ModelIndex.Group;
const Op = ModelIndex.sequelize.Op;

const GroupController = function() { };

/**
* Récupération des badges
**/
GroupController.getAll = function( id ) {
  const options = {
    include: [{
       model: ModelIndex.User,
       as : 'users'
     }]
  };
  const where = {};

  if( id !== undefined ) {
      where.id = {
          [Op.eq] : `${id}`
      };
  }
  options.where = where;
  return Group.findAll(options);
};
/**
*  Retrouver un groupe en base
**/
GroupController.find = function( id ) {
  if ( id != undefined ){
    return Group.findById( id );
  }
}

/**
*  Creation d'un groupe
**/
GroupController.add = function(name) {
    return Group.create({
        name : name
    });
};


GroupController.update = function(id, name) {
    return Group.update({
          name : name,
      },
      {
          where : {
              id : id
          }
      }
    );
}

/**
* Suppression d'un groupe
**/
GroupController.delete = function ( id ) {
  return Group.destroy({
    where: {
      id : id
    }
  });
}


// Export du controller
module.exports = GroupController;
