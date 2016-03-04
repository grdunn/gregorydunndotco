var keystone = require('keystone');
var engine   = require('ejs-locals');

keystone.init({

  'name': 'triple-crown-beta',
  'brand': 'Triple Crown Records',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'custom engine': engine,
  'view engine': 'ejs',

  'auto update': true,
  'mongo': process.env.MONGOLAB_URI || 'mongodb://localhost/gregorydunndotco',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '83hkd9alsdkfjh39f8dasfn3wrf4822g',
});

require('./models');

keystone.set('routes', require('./routes'));

// keystone.set('nav', {
// 	'News': ['News', 'NewsCategory'],
//   'Albums': 'Album',
// 	'Artists': 'Artist',
// 	'Videos': ['Video', 'VideoCategory'],
// 	'Admin': 'User',
//   'Featured': 'Featured'
// });

keystone.start();
