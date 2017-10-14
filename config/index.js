const api = {
  // API URL to be used in the client-side code
  clientUrl: process.env.API_CLIENT_URL || '',
  // API URL to be used in the server-side code
  serverUrl:
    process.env.API_SERVER_URL ||
    `http://localhost:${process.env.PORT || 3000}`
};

const analytics = {};

const options = {
  name: 'vision100it',
  brand: 'vision100it',

  favicon: 'static/favicon.ico',
  less: 'static',
  static: 'static',

  updates: 'updates',
  'auto update': true,
  mongo: process.env.MONGO_URI || 'mongodb://localhost/vision100it',

  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'vision100it'
};

const locals = {};

const nav = {
  people: ['users'],
  content: ['pages', 'events']
};

module.exports = {
  api,
  analytics,
  options,
  locals,
  nav
};
