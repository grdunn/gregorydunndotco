var keystone = require('keystone');
var async = require('async');
const Post = keystone.list('Post');

exports = module.exports = function (req, res){
  var view = new keystone.View(req, res);

  var locals =  res.locals;

// Get projects
  view.on('init', function(next){
    var featured = Post.model.find().sort('-createdAt').populate('categories')
        .exec(function (err, results){
          console.log(results);
          locals.posts = results;
          next();
        });
      })


// Render index
  view.render('blog');
};
