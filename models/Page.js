const keystone = require('keystone');
const transform = require('model-transform');

const Types = keystone.Field.Types;

const Page = new keystone.List('Page', {
  autokey: {path: 'slug', from: 'name', unique: true},
  track: true
});

Page.add({
  name: {type: String, required: true},
  description: {type: Types.Html, wysiwyg: true, height: 150},
  events: {type: Types.Relationship, ref: 'Event', many: true},
  getInvolved: {type: Types.Html, wysiwyg: true, height: 150},
  aboutUs: {
    description: {type: Types.Html, wysiwyg: true, height: 150},
    team: {type: Types.Relationship, ref: 'User', many: true}
  },
  contactUs: {type: Types.Html, wysiwyg: true, height: 150}
});

Page.defaultColumns =
  'name, description';

transform.toJSON(Page);
Page.register();
