var keystone = require('keystone');
var async = require('async');
const Post = keystone.list('Post');

exports = module.exports = function (req, res){
  var view = new keystone.View(req, res);

  var locals =  res.locals;

view.on('init', function(next) {
  var blog = Post.paginate({
			page: req.query.page || 1,
				perPage: 6,
				maxPages: 10,
		})
		.where('state', 'published')
		.sort('-createdAt')
		.populate('categories');
      blog.exec(function (err, results) {
        console.log(results);
		  locals.posts = results;
      next();
	});
});


// Render index
  view.render('blog');
};
