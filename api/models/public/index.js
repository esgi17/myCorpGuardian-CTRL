'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config');
const Op = Sequelize.Op;
const basename = path.basename(module.filename);

const ModelIndex = {};

ModelIndex.getModel = function (modelName) {
    return this[modelName];
};

const sequelize = new Sequelize(config.private_bdd.dbname, config.private_bdd.user, config.private_bdd.password, {
  host: config.private_bdd.host,
  dialect: config.private_bdd.dialect,
  port: config.private_bdd.port,
  operatorsAliases: Op
});

// LOAD MODELS
fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        ModelIndex[model.name] = model;
    });

// ASSOCIATE MODELS
Object.keys(ModelIndex)
.forEach((modelName) => {
    if (ModelIndex[modelName].associate) {
        ModelIndex[modelName].associate(ModelIndex);
    }
});

ModelIndex.sequelize = sequelize;
ModelIndex.Sequelize = Sequelize;
ModelIndex.openDatabase = function() {
  return sequelize
      .authenticate()
      .then(() => sequelize.sync());
};

module.exports = ModelIndex;
