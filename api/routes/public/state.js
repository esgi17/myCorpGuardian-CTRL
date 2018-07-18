const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const StateController = require(publicConfig.controllers.state_path);

const stateRouter = express.Router();
stateRouter.use(bodyParser.json());

/**
* @api {get} /State GET State
* @apiGroup state
* @apiUse searchById
* @apiUse stateCreated
* @apiUse error500
*/
stateRouter.get('/', function(req, res) {
    const id = 1;
    StateController.getAll(id)
      .then( (state) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(200).json(state);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).json({
              success : false,
              status : 500,
              message : "500 Internal Server Error"
          }).end();
      });
});

/**
* @api {put} /State UPDATE State
* @apiGroup state
* @apiUse stateCreated
* @apiUse error500
* @apiUse error400
*/
stateRouter.put('/', function(req, res) {
  const set = parseInt(req.body.set);

  StateController.getAll(1)
    .then( (state) => {
      if (state) {
          StateController.update(set )
            .then( (state) => {
                res.status(200).json(state);
            });
      } else {
          res.status(400).json({
              success: false,
              status : 400,
              message : "Bad Request"
          });
      }
    }).catch( (err) => {
        console.error(err);
        res.status(500).json({
            success : false,
            status : 500,
            message : "500 Internal Server Error"
        }).end();
    });
});

module.exports = stateRouter;
