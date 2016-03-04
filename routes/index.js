var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

keystone.set('404', function (req, res, next) {
	res.status(404).render('errors/404');
});

keystone.set('505', function (req, res, next) {
	res.status(505).render('errors/505');
});

var routes = {
    views: importRoutes('./views')
};

exports = module.exports = function(app) {
    app.get('/', routes.views.index);
}
