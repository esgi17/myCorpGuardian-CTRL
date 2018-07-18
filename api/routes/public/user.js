const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const UserController = require(publicConfig.controllers.user_path);


const userRouter = express.Router();
userRouter.use(bodyParser.json());

/**
* @api {get} /User GET User
* @apiGroup user
* @apiUse searchById
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
*/
userRouter.get('/:id?', function(req, res) {
    // Récupération des parametres
    const id = req.params.id;
    // On appelle la methode
    UserController.getAll(id)
      .then( (user) => {
          // Si la méthode ne renvoie pas d'erreur, on renvoie le resultat
          res.status(201).json({
              success : true,
              status : 201,
              datas : user
          });
      })
      .catch( (err) => {
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
* @api {post} /User ADD User
* @apiGroup user
* @apiUse userExample
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
userRouter.post('/', function(req, res) {
    /* Récupération des parametres */
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const job = req.body.job || "host";
    const group_id = req.body.group_id || 1;

    // Si les parametres obligatoires ne sont pas tous remplis
    if( firstname === undefined || lastname === undefined) {
        // Renvoi d'une erreur
        res.status(400).json({
            success : false,
            status : 400,
            message : "Bad Request"
        }).end();
        return;
    }
    // Sinon, on appelle la methode
    UserController.add(firstname, lastname, job, group_id)
      .then( (user) => {
          // Si la methode ne renvoie pas d'erreur, on renvoie le résultat
          res.status(200).json({
              success : true,
              status : 201,
              datas : user
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
* @api {delete} /user DELETE User
* @apiGroup user
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 User deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "User deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
userRouter.delete('/', function (req, res) {
    // Récupération des parametres
    var id = parseInt(req.body.id);
    // Appel de la methode
    UserController.getAll(id)
      .then( (user) => {
          // Si la methode ne renvoie pas d'erreur
          if (user) {
              // Si l'objet de retour est defini, on appelle la methode
              UserController.delete(id)
                .then( (user) => {
                    // Si la methode ne renvoie pas d'erreur, on renvoie les données
                    res.status(200).json({
                        success : true,
                        status : 200,
                        datas : user
                    });
                });
              // Si la methode renvoie un objet undefined, on renvoie une erreur
          } else {
            res.status(400).json({
                  success : false,
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

/**
* @api {put} /User UPDATE User
* @apiGroup user
* @apiUse userExample
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
userRouter.put('/', function(req, res) {
  console.log("yo");
  const firstname = req.body.firstname;
  const lastame = req.body.lastname;
  const job = req.body.job || "host";
  const group_id = req.body.group_id || 0;
  const id = parseInt(req.body.id);

  UserController.getAll(id)
    .then( (user) => {
      if (user) {
          UserController.update(id, firstname, lastname, job, group_id)
            .then( (user) => {
                res.status(200).json({
                    success : true,
                    status : 200,
                    datas : user
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

userRouter.put('/attribute_group', function(req, res) {
    const user_id = req.body.user_id;
    const group_id = req.body.group_id;
    console.log(user_id);
    console.log(group_id);
    UserController.getAll(user_id)
      .then ( (user) => {
          if (user) {
              UserController.affectGroup(group_id, user_id)
                .then( (user) => {
                    res.status(200).json({
                        success : true,
                        status : 200,
                        datas : user
                    });
              });
          } else {
              res.status(400).json({
                  success: false,
                  status : 400,
                  message : "Bad Request"
              });
          }
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

module.exports = userRouter;
