const express = require('express');
const expressGraphQL = require('express-graphql');
const keystone = require('keystone');
const pinoColada = require('pino-colada');
const pinoHttp = require('pino-http');

const dev = process.env.NODE_ENV !== 'production';

const start = ({
  config,
  handle = () => {}
}) => {
  const app = express();
  const pretty = pinoColada();
  pretty.pipe(process.stdout);

  keystone.init(config.options);
  keystone.import('models');
  keystone.set('locals', config.locals);
  keystone.set('nav', config.nav);

  keystone.initDatabaseConfig();
  keystone.initExpressSession();

  app.use('/keystone', keystone.Admin.Server.createStaticRouter(keystone));
  app.use(express.static('static'));
  app.use(keystone.get('session options').cookieParser);
  app.use(keystone.expressSession);
  app.use(keystone.session.persist);

  app.use(pinoHttp({stream: pretty}));
  app.use('/keystone', keystone.Admin.Server.createDynamicRouter(keystone));

  app.use(
    '/graphql',
    expressGraphQL(req => ({
      schema: require('./schema'),
      graphiql: dev,
      rootValue: {request: req},
      pretty: dev
    }))
  );

  app.get('*', handle);

  return new Promise((resolve, reject) => {
    keystone.openDatabaseConnection(() => {
      const server = app.listen(3000, err => {
        if (err) {
          return reject(err);
        }
        console.log('> Ready on http://localhost:3000');
        return resolve(server);
      });
    });
  });
};

const stop = server => new Promise(resolve => {
  keystone.closeDatabaseConnection(() => {
    server.close();
    resolve();
  });
});

module.exports = {
  start,
  stop
};
