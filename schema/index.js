// @flow

const keystone = require('keystone');
const {GraphQLString, GraphQLBoolean} = require('graphql');
const {GQC} = require('graphql-compose');
const {composeWithMongoose} = require('graphql-compose-mongoose');

const UserTC = composeWithMongoose(keystone.list('User').model);
const PageTC = composeWithMongoose(keystone.list('Page').model);
const EventTC = composeWithMongoose(keystone.list('Event').model);

const API_KEY = 'AIzaSyAKlXmkxql5J_iKGqRwReGSn1jUGnA1DHU';

UserTC.removeField(['email', 'password']);

EventTC.addFields({
  hasLocation: {
    type: GraphQLBoolean,
    resolve: source => source.location.street1 !== null,
    projection: {location: true}
  },
  mapUrl: {
    type: GraphQLString,
    resolve: ({location}) => {
      const query = [
        location.number,
        location.name,
        location.street1,
        location.street2,
        location.street3,
        location.suburb,
        location.state,
        location.postcode,
        location.country
      ].filter(Boolean).join('').replace(/\s/, '+');

      return `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${query}`;
    },
    projection: {location: true}
  }
});

PageTC.addRelation('events', {
  resolver: () => EventTC.getResolver('findByIds'),
  prepareArgs: {
    _ids: source => source.events || []
  },
  projection: {events: true}
});

GQC.rootQuery().addFields({
  hello: {
    type: GraphQLString,
    resolve: () => 'Hi! How are you?'
  },

  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userTotal: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),

  pageById: PageTC.getResolver('findById'),
  pageByIds: PageTC.getResolver('findByIds'),
  pageOne: PageTC.getResolver('findOne'),
  pageMany: PageTC.getResolver('findMany'),
  pageTotal: PageTC.getResolver('count'),
  pageConnection: PageTC.getResolver('connection'),

  eventById: EventTC.getResolver('findById'),
  eventByIds: EventTC.getResolver('findByIds'),
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),
  eventTotal: EventTC.getResolver('count'),
  eventConnection: EventTC.getResolver('connection')
});

const schema = GQC.buildSchema();

module.exports = schema;
