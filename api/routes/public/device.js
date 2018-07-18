const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const DeviceController = require(publicConfig.controllers.device_path);

const deviceRouter = express.Router();
deviceRouter.use(bodyParser.json());

/**
* @api {get} /Device GET Device
* @apiGroup device
* @apiUse searchById
* @apiUse deviceCreated
* @apiUse error500
*/
deviceRouter.get('/', function(req, res) {
    const id = req.body.id;
    DeviceController.getAll(id)
      .then( (device) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : device
        });
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
* @api {post} /Device ADD Device
* @apiGroup device
* @apiUse deviceExample
* @apiUse deviceCreated
* @apiUse error500
* @apiUse error404
*/
deviceRouter.post('/', function(req, res) {

    DeviceController.add()
      .then( (device) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : device
        });
    }).catch( (err) => {
        // Sinon, on renvoie un erreur systeme
        console.error(err);
        res.status(500).json({
            success : false,
            status : 500,
            message : "500 Internal Server Error"
        }).end();
    });
});

/**
* @api {delete} /device DELETE Device
* @apiGroup device
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Device deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Device deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
deviceRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  DeviceController.find(id)
  .then( (device) => {
    if (device) {
      DeviceController.delete(id)
        .then( device => {
          res.status(201).json({
              success : true,
              status : 201,
              message : "Device deleted"
          });
        });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Device not found"
      }).end();
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


module.exports = deviceRouter;
