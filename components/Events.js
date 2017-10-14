// @flow
import * as React from 'react';
import kebabCase from 'lodash/kebabCase';
import styled from 'react-emotion';
import {Link} from 'react-scroll';
import type {Event} from '../types';
import {media} from '../config/constants';
import Blurb from './Blurb';
import Heading from './Heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const Photo = styled.img`
  width: auto;
  display: ${({mobile}) => mobile ? 'block' : 'none'};
  ${media.tablet} {
    max-height: 100%;
    display: ${({mobile}) => mobile ? 'none' : 'block'};
  }
`;

type Props = {
  events: Array<Event>;
};

const Events = ({events}: Props) => {
  const elements = events.map(item => (
    <Blurb
      key={item.name}
      h3={item.name}
      text={item.description}
    >
      <ul>
        <li><b>What:</b> {item.what}</li>
        <li><b>When:</b> {item.when}</li>
        <li>
          <b>Where:</b>
          {' '}
          {item.where}
          {' '}
          {item.hasLocation && (
            <Link
              href={`#${kebabCase(item.location.street1)}`}
              to={kebabCase(item.location.street1)}
              smooth
              duration={500}
              offset={-70}
            >
              (See map)
            </Link>
          )}
        </li>
      </ul>
    </Blurb>
  ));

  elements.splice(1, 0, <img key="group-of-students" className="events-image" src="/static/students_small.png" alt="Group of students"/>);
  elements.splice(3, 0, <Photo key="icon-row-small" mobile src="/static/icon_row_small.png"/>);

  return (
    <Container id="events">
      <Heading image="/static/coffee-icon.png">Events</Heading>
      {elements}
    </Container>
  );
};

export default Events;
