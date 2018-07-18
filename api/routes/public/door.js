const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const DoorController = require(publicConfig.controllers.door_path);

const doorRouter = express.Router();
doorRouter.use(bodyParser.json());

/**
* @api {get} /Door GET Door
* @apiGroup door
* @apiUse searchById
* @apiUse doorCreated
* @apiUse error500
*/
doorRouter.get('/', function(req, res) {
    const id = req.body.id;
    DoorController.getAll(id)
      .then( (door) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : door
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
* @api {post} /Door ADD Door
* @apiGroup door
* @apiUse doorExample
* @apiUse doorCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
doorRouter.post('/', function(req, res) {
    const name = req.body.name;
    const ref = req.body.ref;

    if( ip === undefined || type === undefined ) {
      // Renvoi d'une erreur
      res.status(400).json({
          success : false,
          status : 400,
          message : "Bad Request"
      }).end();
    }
    DoorController.add( ip, name, ref )
      .then( (door) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : door
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
* @api {delete} /door DELETE Door
* @apiGroup door
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Door deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Door deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
doorRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  DoorController.find(id)
  .then( (door) => {
    if (door) {
      DoorController.delete(id)
        .then( door => {
          res.status(201).json({
              success : true,
              status : 201,
              message : "Door deleted"
          });
        });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Door not found"
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

/**
* @api {put} /Door UPDATE Door
* @apiGroup door
* @apiUse doorExample
* @apiUse doorCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
doorRouter.put('/:id?', function(req, res) {
  const name = req.body.name;
  const ref = req.body.ref;
  const id = parseInt(req.params.id);

  DoorController.getAll(id)
    .then( (door) => {
      if (door) {
          DoorController.update( id, name, ref )
            .then( (door) => {
                res.status(200).json({
                    success : true,
                    status : 200,
                    datas : door
                });
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

module.exports = doorRouter;
