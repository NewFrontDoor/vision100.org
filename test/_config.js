import {MongoDBServer} from 'mongomem';
import config from '../config';

export default async () => Object.assign(config, {
  options: Object.assign(config.options, {
    mongo: await MongoDBServer.getConnectionString()
  })
});
