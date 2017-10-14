const keystone = require('keystone');
const transform = require('model-transform');

const Types = keystone.Field.Types;

const Event = new keystone.List('Event');

Event.add({
  name: {type: String, required: true},
  description: {type: Types.Html, wysiwyg: true, height: 150},
  what: {type: String},
  when: {type: String},
  where: {type: String},
  location: {type: Types.Location, defaults: {country: 'Australia'}}
});

Event.defaultColumns =
  'name';

transform.toJSON(Event);
Event.register();
