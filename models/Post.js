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
    createdAt: { type: Date, default: Date.now },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'published' }
});

Post.schema.virtual('format_date').get(function() {
	var day = this.createdAt.getDate(),
      month = this.createdAt.getMonth(),
      fullYear = this.createdAt.getFullYear(),
      date_format = month + "." + day + "." + fullYear
      return date_format
});

Post.register();
