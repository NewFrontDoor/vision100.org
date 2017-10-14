// @flow
import * as React from 'react';
import styled from 'react-emotion';
import Heading from './Heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const Contact = ({description}: { description: string }) => (
  <Container id="contact">
    <Heading>Contact Us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
  </Container>
);

export default Contact;
