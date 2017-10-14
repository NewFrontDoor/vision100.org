// @flow

import type {OperationComponent, QueryProps} from 'react-apollo';

import * as React from 'react';
import {gql, graphql} from 'react-apollo';
import styled from 'react-emotion';
import {media} from '../config/constants';
import type {Event} from '../types';
import Welcome from './Welcome';
import Events from './Events';
import Involved from './Involved';
import Contact from './Contact';
import Where from './Where';
import About from './About';
import SideBar from './SideBar';
import {createContainer, Column} from './Container';

type Response = {
  page: {
    events: Array<Event>;
    description: string;
    aboutUs: {
      description: string;
    };
    getInvolved: string;
    contactUs: string;
  };
};

type InputProps = {
  slug: string;
};

type Props = Response & QueryProps;

const HomeContainer = styled(createContainer())`
  padding-top: 4rem;
`;

const SideBarColumn = styled(Column)`
  padding-top: 4rem;
  ${media.tablet} {
    min-width: 340px;
  }
`;

const firstPage = gql`
query firstPage($input: FilterFindOnePageInput) {
  page: pageOne(filter: $input) {
    description
    events {
      name
      description
      what
      when
      where
      location {
        street1
      }
      hasLocation
    }
    getInvolved
    aboutUs {
      description
      team
    }
    contactUs
  }
}
`;

const withData: OperationComponent<Response, InputProps, Props> = graphql(firstPage, {
  options: ({slug}) => ({
    variables: {
      input: {
        slug
      }
    }
  }),
  props: ({data}) => ({
    page: data.page || {events: []}
  })
});

const Home = withData(({page}: Props) => (
  <HomeContainer>
    <Column id="home" screen={{tablet: '100%', desktop: '70%'}}>
      <Welcome description={page.description}/>
      <Events events={page.events}/>
      <Involved description={page.getInvolved}/>
      <About {...page.aboutUs}/>
      <Where/>
      <Contact description={page.contactUs}/>
    </Column>
    <SideBarColumn screen={{tablet: '100%', desktop: '30%'}}>
      <SideBar/>
    </SideBarColumn>
  </HomeContainer>
));

export default Home;
