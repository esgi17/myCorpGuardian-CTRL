const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/admin', require('./admin'))
}

module.exports = RouteManager;
