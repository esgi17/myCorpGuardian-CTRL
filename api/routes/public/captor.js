const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const CaptorController = require(publicConfig.controllers.captor_path);

const captorRouter = express.Router();
captorRouter.use(bodyParser.json());

/**
* @api {get} /Captor GET Captor
* @apiGroup captor
* @apiUse searchById
* @apiUse captorCreated
* @apiUse error500
*/
captorRouter.get('/', function(req, res) {
    const id = req.body.id;
    CaptorController.getAll(id)
      .then( (captor) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : captor
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
* @api {post} /Captor ADD Captor
* @apiGroup captor
* @apiUse captorExample
* @apiUse captorCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
captorRouter.post('/', function(req, res) {
    const ip = req.body.ip;
    const type = req.body.type;
    const description = req.body.description;

    if( ip === undefined || type === undefined ) {
      // Renvoi d'une erreur
      res.status(400).json({
          success : false,
          status : 400,
          message : "Bad Request"
      }).end();
    }
    CaptorController.add( ip, type, description )
      .then( (captor) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : captor
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
* @api {delete} /captor DELETE Captor
* @apiGroup captor
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Captor deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Captor deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
captorRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  CaptorController.find(id)
  .then( (captor) => {
    if (captor) {
      CaptorController.delete(id)
        .then( captor => {
          res.status(201).json({
              success : true,
              status : 201,
              message : "Captor deleted"
          });
        });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Captor not found"
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
* @api {put} /Captor UPDATE Captor
* @apiGroup captor
* @apiUse captorExample
* @apiUse captorCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
captorRouter.put('/:id?', function(req, res) {
  const ip = req.body.ip;
  const type = req.body.type;
  const description = req.body.description;
  const id = parseInt(req.params.id);

  CaptorController.getAll(id)
    .then( (captor) => {
      if (captor) {
          CaptorController.update(id, ip, type, description )
            .then( (captor) => {
                res.status(200).json({
                    success : true,
                    status : 200,
                    datas : captor
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

module.exports = captorRouter;
