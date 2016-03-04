var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res){
  var view = new keystone.View(req, res);

  var locals =  res.locals;
                locals.whatever = []

// Get featured posts
  // view.on('init', function(next){
  //   var featured = Featured.model.find().sort('-createdAt')
  //       .exec(function (err, results){
  //         locals.featured = results;
  //         next();
  //       });
  //     })


// Render index
  view.render('index');
};
