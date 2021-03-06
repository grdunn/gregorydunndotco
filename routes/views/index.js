var keystone = require('keystone');
var async = require('async');
const Project = keystone.list('Project');

exports = module.exports = function (req, res){
  var view = new keystone.View(req, res);

  var locals =  res.locals;
                locals.whatever = []

// Get projects
  view.on('init', function(next){
    var featured = Project.model.find().sort('-createdAt').populate('categories')
        .exec(function (err, results){
          console.log(results);
          locals.projects = results;
          next();
        });
      })


// Render index
  view.render('index');
};
