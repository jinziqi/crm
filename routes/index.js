/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var multer  = require('multer');
// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

var upload = multer({ dest: 'uploads/' });

// Setup Route Bindings
exports = module.exports = function (app) {

	// Views
    app.get('/', middleware.requireUser, routes.views.index);
	app.all('/import', [middleware.requireAdmin,upload.single('import_file')], routes.views.import);
	app.get('/import/template', middleware.requireAdmin, routes.views.template);
	app.all('/importcasebatch', [middleware.requireAdmin,upload.single('import_file')], routes.views.importcasebatch);
	app.get('/importcasebatch/template', middleware.requireAdmin, routes.views.template);
	app.all('/importevidenceprove', [middleware.requireAdmin,upload.single('import_file')], routes.views.importevidenceprove);
	app.get('/importevidenceprove/template', middleware.requireAdmin, routes.views.template);
	app.all('/importdelivery', [middleware.requireAdmin,upload.single('import_file')], routes.views.importdelivery);
  app.get('/importdelivery/template', middleware.requireAdmin, routes.views.template);
};
