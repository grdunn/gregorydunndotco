
var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Categories = new keystone.List('Categories', {
  autokey: { from: 'name', path: 'key', unique: true }
});


  Categories.add({
    name: { type: String, required: true },
  });

  Categories.relationship({ ref: 'Project', path: 'categories' });


  Categories.register();
