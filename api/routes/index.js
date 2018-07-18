const RouteManager = function() { };
const publicRouteManager = require('./public');
const generalRouteManger = require('./general');
const controlsRouteManger = require('./controls');

RouteManager.attach = function(app) {
    //app.use(require('./authenticate'));
    controlsRouteManger.attach(app);
    publicRouteManager.attach(app);
    generalRouteManger.attach(app);

}

module.exports = RouteManager;
