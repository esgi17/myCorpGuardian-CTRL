const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const Pass = ModelIndex.Pass;
const Op = ModelIndex.sequelize.Op;

const PassController = function() { };

/**
* Récupération des badges
**/
PassController.getAll = function( id ) {
    const options = {
      include: [{
          model: ModelIndex.User,
          as : 'user'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq]: id
        }
    }
    options.where = where;
    return Pass.findAll(options);
};

/**
*  Retrouver un badge en base
**/
PassController.find = function(id) {
    return Pass.findById(id);
}

/**
*  Creation d'un badge
**/
PassController.add = function(user_id) {
    return Pass.create({
        user_id: user_id
    });
};

/**
*  Attribution d'un badge
**/
PassController.affect = function (passId, userId) {
  const options = {
    user_id : userId
  };
  const obj = {};

  if( passId !== undefined ) {
      obj.where = {
          id : passId
      };
  }
  //options.where = where;
  return Pass.update(options, obj);
};

/**
* Suppression d'un badge
**/
PassController.delete = function ( id ) {
  return Pass.destroy({
    where: {
      id : id
    }
  });
}
// Export du controller
module.exports = PassController;
