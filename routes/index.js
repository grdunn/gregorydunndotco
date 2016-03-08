var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname),
    nodemailer = require('nodemailer');

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
    app.get('/about', routes.views.about);
    app.get('/blog', routes.views.blog);

    app.post('/contact', function (req, res){
      console.log(req.body.email);

      var mailOpts, smtpTrans;

      smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "grdunn@gmail.com",
          pass: "Thepainting8"
        }
      });

      mailOpts = {
        from: req.body.email,
        to: 'grdunn@gmail.com',
        subject: 'Message from Gregory Dunn Dot Co',
        text: 'Message: ' + req.body.message + ', From: ' + req.body.name + ', at: ' + req.body.email
      };

      smtpTrans.sendMail(mailOpts, function (err, info){
        if (err) {
          console.log(err);
        } else {
          console.log(info);
          res.redirect(301, '/about')
        }
      });
    });
}
