var keystone = require('keystone');
var async = require('async');
const Project = keystone.list('Project');

exports = module.exports = function (req, res){
  var view = new keystone.View(req, res);

  var locals =  res.locals;

  view.on('init', function(next) {
    console.log(req.params.id);

     var project = Project.model.find().where('slug', req.params.id).populate('categories');
     project.exec(function(err, results){
       if (err || !results.length) {
         console.log('No project found...')
         return view.res.status(404).render('errors/404')
 			} else {
        console.log('HERE THEY ARE!!!!');
        console.log(results);
         locals.project = results;
         next(err)
       }
     });
   });



// Render index
  view.render('show');
};
