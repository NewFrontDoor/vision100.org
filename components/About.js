// @flow

import * as React from 'react';
import styled from 'react-emotion';
import Blurb from './Blurb';
import Heading from './Heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const About = ({description}: { description: string }) => (
  <Container id="about">
    <Heading image="/static/apple.png">About us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
    <Blurb
      h3="Luke Hansard"
      teamImg="/static/Luke_mug.jpg"
      text="Luke is a real Tasmanian local and our only full-time staff. He trained at Moore College in Sydney and gives most of the talks and oversees most of the running of FOCUS. Luke is a husband to Jan and father to three young boys. He likes to cook and eat strange things, especially weird meat. He might ask you to try his cooking."
    />
    <Blurb
      h3="Sam Gough"
      teamImg="/static/Sam_mug.jpg"
      text="Sam is a graduate of the University of Tasmania, Sydney Missionary Bible College and Moore College. Having trained and worked as a doctor, he made the switch from medicine to FOCUS. Sam is married to Beck and has two young kids, Henry and Phoebe. He loves Maccas, cheap instant coffee and wearing trackies."
    />
  </Container>
 );

export default About;
