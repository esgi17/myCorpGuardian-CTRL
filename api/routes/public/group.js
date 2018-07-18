const express = require('express');
const bodyParser = require('body-parser');
const publicConfig = require('./config');
const GroupController = require(publicConfig.controllers.group_path);

const groupRouter = express.Router();
groupRouter.use(bodyParser.json());

/*
* Récupération des groupes
* @method : get
* @route : /group/
*/
groupRouter.get('/', function(req, res) {
    const id = req.body.id;
    GroupController.getAll( id )
      .then( (group) => {
          res.status(201).json(group);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/*
* Ajout d'un groupe
* @method : post
* @route : /user/
*/
groupRouter.post('/', function(req, res) {
    const description = req.body.description;
    if( description === undefined ) {
        res.status(400).end();
        return;
    }
    GroupController.add(description)
      .then( (group) => {
          res.status(201).json(group);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});

/*
* Suppression d'un groupe
* @method : delete
* @route : /group/
*/
groupRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  GroupController.find(id)
  .then( (group) => {
    if (group) {
      GroupController.delete(id)
        .then( group => {
            res.status(200).json('Group deleted');
        });
    } else {
      res.status(400).json('Group not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

/*
* Affectation / Modification d'un badge
* @method : patch
* @route : /badge/
*/
groupRouter.patch('/:id', function(req, res) {
  const user_id = req.body.user_id || 0;
  var id = parseInt(req.params.id);
  GroupController.find(id)
  .then( (user) => {
    if (user) {
      GroupController.attribute(id, user_id)
      .then( user => {
      res.status(200).json('Group updated');
      });
    } else {
      res.status(400).json('Group not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});


module.exports = groupRouter;
