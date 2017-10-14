const next = require('next');
const config = require('./config');
const server = require('./server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

module.exports = app.prepare().then(() => server.start({
  config,
  handle: app.getRequestHandler()
})).catch(err => console.error(err));
