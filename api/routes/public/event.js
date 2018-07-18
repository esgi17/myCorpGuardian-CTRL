const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const EventController = require(publicConfig.controllers.event_path);

const eventRouter = express.Router();
eventRouter.use(bodyParser.json());

/**
* @api {get} /Event GET Event
* @apiGroup event
* @apiUse searchById
* @apiUse eventCreated
* @apiUse error500
*/
eventRouter.get('/', function(req, res) {
    const id = req.body.id;
    EventController.getAll(id)
      .then( (event) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : event
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
* @api {post} /Event ADD Event
* @apiGroup event
* @apiUse eventExample
* @apiUse eventCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
eventRouter.post('/', function(req, res) {
    const date = req.body.date;
    const data = req.body.data;

    if( date === undefined || data === undefined ) {
      // Renvoi d'une erreur
      res.status(400).json({
          success : false,
          status : 400,
          message : "Bad Request"
      }).end();
    }
    EventController.add( date, data )
      .then( (event) => {
        // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
        res.status(201).json({
            success : true,
            status : 201,
            datas : event
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
* @api {delete} /event DELETE Event
* @apiGroup event
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Event deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Event deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
eventRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  EventController.find(id)
  .then( (event) => {
    if (event) {
      EventController.delete(id)
        .then( event => {
          res.status(201).json({
              success : true,
              status : 201,
              message : "Event deleted"
          });
        });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Event not found"
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


module.exports = eventRouter;
