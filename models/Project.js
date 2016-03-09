var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});


Project.add({
    title: { type: String, required: true, initial: true },
    itunes: { type: String },
    spotify: { type: String },
    site_link: { type: String },
    description: { type: Types.Html, wysiwyg: true, height: 200 },
    photo: {
      	type: Types.LocalFile,
      	dest: './public/images/portfolio',
      	filename: function(item, file){
      		return file.originalname
      	}
      },
    show_photo: {
      	type: Types.LocalFile,
      	dest: './public/images/show',
      	filename: function(item, file){
      		return file.originalname
      	}
      },
    categories: { type: Types.Relationship, ref: 'Categories', many: true },
    link: { type: String },
    createdAt: { type: Date, default: Date.now }
});

Project.register();
