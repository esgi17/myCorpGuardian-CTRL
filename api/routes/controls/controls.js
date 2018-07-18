const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../../controllers');
const publicRoute = require('../public');
const ControlsController = controllers.ControlsController;
//const HomeController = controllers.HomeController;

const controlsRouter = express.Router();
controlsRouter.use(bodyParser.json());


controlsRouter.use(function ( req, res, next ){
    console.log("Insert event");
    // Inserer un event
        // Si ok =>
    next();
},
function(req,res, next) {
    publicRoute.attach(controlsRouter);
    next();
});

/*
*  Récuperer l'id du device en passant sa reference
*   param : <string> ref_device => si vide, on renvoie une erreur
*   return : objet device
*/
controlsRouter.get('/', function(req, res) {
    const ref_device = req.params.ref_device;
    if( ref_device === undefined ) {
        res.status(400).json({
            success : false,
            status : 400,
            message : "Bad request ! "
        }).end();
    }
    DevicesController.getByReference(ref_device)
      .then( (device) => {
          res.status(200).json({
              success : true,
              status : 200,
              datas : device
          });
      })
      .catch( (err) => {
          res.status(500).end();
      });
});

controlsRouter.get('/deviceType', function(req, res) {
  const id_device = req.params.id_device;
  if( id_device === undefined ) {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Bad request ! "
      }).end();
  }
  DevicesController.getType(id_device)
    .then( (deviceType) => {
        res.status(200).json({
            success : true,
            status : 200,
            datas : deviceType
        });
    })
    .catch( (err) => {
        res.status(500).end();
    });
});



module.exports = controlsRouter;
