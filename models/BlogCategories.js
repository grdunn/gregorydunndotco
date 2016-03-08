
var keystone = require('keystone'),
    Types = keystone.Field.Types;

var BlogCategories = new keystone.List('BlogCategories', {
  autokey: { from: 'name', path: 'key', unique: true }
});


  BlogCategories.add({
    name: { type: String, required: true },
  });

  BlogCategories.relationship({ ref: 'Post', path: 'categories' });


  BlogCategories.register();
