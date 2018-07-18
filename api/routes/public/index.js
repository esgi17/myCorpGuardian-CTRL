const privateRouteManager = function() { };

privateRouteManager.attach = function(app) {
    app.use('/user', require('./user'));
    app.use('/pass', require('./pass'));
    app.use('/group', require('./group'));
    app.use('/schedule', require('./schedule'));
    app.use('/event', require('./event'));
    app.use('/door', require('./door'));
    app.use('/deviceType', require('./deviceType'));
    app.use('/device', require('./device'));
    app.use('/captor', require('./captor'));
    app.use('/state', require('./state'));
}

module.exports = privateRouteManager;
