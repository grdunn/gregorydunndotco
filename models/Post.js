var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
  autokey: { path: 'slug', from: 'name', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});


Post.add({
    title: { type: String, required: true, initial: true },
    post: { type: Types.Html, wysiwyg: true, height: 200 },
    categories: { type: Types.Relationship, ref: 'BlogCategories', many: true },
    createdAt: { type: Date, default: Date.now }
});

Post.register();
