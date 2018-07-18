'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config');
const Op = Sequelize.Op;
const basename = path.basename(module.filename);

const GeneralModelIndex = {};

GeneralModelIndex.getModel = function (modelName) {
    return this[modelName];
};

const sequelize = new Sequelize(config.general_bdd.dbname, config.general_bdd.user, config.general_bdd.password, {
  host: config.general_bdd.host,
  dialect: config.general_bdd.dialect,
  port: config.general_bdd.port,
  operatorsAliases: Op
});

// LOAD MODELS
fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        GeneralModelIndex[model.name] = model;
    });

// ASSOCIATE MODELS
Object.keys(GeneralModelIndex)
.forEach((modelName) => {
    if (GeneralModelIndex[modelName].associate) {
        GeneralModelIndex[modelName].associate(GeneralModelIndex);
    }
});

GeneralModelIndex.sequelize = sequelize;
GeneralModelIndex.Sequelize = Sequelize;
GeneralModelIndex.openDatabase = function() {
  return sequelize
      .authenticate()
      .then(() => sequelize.sync());
};

module.exports = GeneralModelIndex;
