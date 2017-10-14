// @flow
import * as React from 'react';
import styled from 'react-emotion';
import Heading from './Heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const Involved = ({description}: { description: string }) => (
  <Container id="involved">
    <Heading image="/static/bible.png">Get involved</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
    <img src="/static/girls_on_bridge_small.jpg" alt="Girls on a bridge"/>
  </Container>
);

export default Involved;
