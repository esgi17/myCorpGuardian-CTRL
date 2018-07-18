const RouteManager = function() { };
const publicRouteManager = require('../public');
const generalRouteManger = require('../general');

RouteManager.attach = function(app) {
    //app.use('/',)
    app.use('/control', require('./controls'));
    publicRouteManager.attach(app);

}

module.exports = RouteManager;
