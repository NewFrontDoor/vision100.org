// @flow

import type {OperationComponent, QueryProps} from 'react-apollo';

import * as React from 'react';
import {gql, graphql} from 'react-apollo';
import styled from 'react-emotion';
import kebabCase from 'lodash/kebabCase';
import type {Event} from '../types';
import GoogleMap from './GoogleMap';
import Blurb from './Blurb';
import Heading from './Heading';

type Response = {
  events: Array<Event>;
};

type Props = Response & QueryProps;

const Container = styled.div`
  margin-top: 6rem;
`;

const MapContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const events = gql`
{
  events: eventMany {
    hasLocation
    mapUrl
    location {
      street1
    }
  }
}
`;

const withData: OperationComponent<Response, {}, Props> = graphql(events, {
  props: ({data}) => ({
    events: (data.events || []).filter(item => item.hasLocation)
  })
});

const Where = withData(({events: [sandyBayBaptist, wellspringChurch]}: Props) => {
  if (sandyBayBaptist && wellspringChurch) {
    return (
      <Container id="where">
        <Heading image="/static/coffee-icon.png">Where we meet</Heading>
        <Blurb>
          <div id="map">
            <p>We meet for Friday night FOCUS at Sandy Bay Baptist Church.</p>
            <MapContainer id={kebabCase(sandyBayBaptist.location.street1)}>
              <GoogleMap query={sandyBayBaptist.mapUrl}/>
            </MapContainer>
            <p>
              We meet for small groups and some special events at Wellspring Church.
            </p>
            <MapContainer id={kebabCase(wellspringChurch.location.street1)}>
              <GoogleMap query={wellspringChurch.mapUrl}/>
            </MapContainer>
          </div>
        </Blurb>
      </Container>
    );
  }

  return null;
});

export default Where;
