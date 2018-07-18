const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Door = ModelIndex.Door;

const Op = ModelIndex.sequelize.Op;

const DoorController = function() { };


/**
*  Retrouver une porte en base
**/
DoorController.find = function( id ) {
  if ( id != undefined ){
    return Door.findById( id );
  }
}

/**
*  Creation d'un groupe
**/
DoorController.add = function( name, ref ) {
    return Door.create({
      name : name,
      ref : ref
    });
};

/**
* Suppression d'un groupe
**/
DoorController.delete = function ( id ) {
  return Door.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'une porte en base
**/
DoorController.update = function( id, name, ref ) {
    return User.update({
        name: name,
        ref: ref
    },{
      where: {
        id : id
      }
    });
};


// Export du controller
module.exports = DoorController;
