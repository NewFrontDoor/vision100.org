// @flow

import * as React from 'react';
import styled from 'react-emotion';
import {media} from '../config/constants';

const Logo = styled.img`
  margin-left: 0;
  margin-bottom: 0;
  float: left;
  width: 110px;
  height: 122px;
  ${media.tablet} {
    width: 164px;
    height: 194px;
    margin-bottom: 48px;
  }
`;

const Jumbotron = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  clear: both;
  ${media.tablet} {
    padding-right: 2rem;
    padding-top: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  ${media.tablet} {
    font-size: 6rem;
    letter-spacing: -2pt;
  }
`;

const To = styled.span`
  font-size: 60px;
  font-weight: 200;
  display: block;
  ${media.tablet} {
    display: inline;
    font-size: 3rem
  }
`;

const Description = styled.div`
  font-size: 1.25rem;
  line-height: 1.2;
  color: #777;
  font-weight: 200
`;

const Photo = styled.img`
  margin-top: -40px;
  max-height: 90px;
  width: auto;
  display: ${({mobile}) => mobile ? 'block' : 'none'};
  ${media.tablet} {
    max-height: 100%;
    display: ${({mobile}) => mobile ? 'none' : 'block'};
  }
`;

const Welcome = ({description}: { description: string }) => (
  <div>
    <Logo id="logo" src="/static/Just_leaves-01_small.png" alt="Focus Leaves"/>

    <Jumbotron>
      <Heading>
        Welcome
        <br/>
        <To>to</To>
        {' '}
        FOCUS
      </Heading>
      <Description
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </Jumbotron>
    <Photo src="/static/students_for_web.png"/>
    <Photo mobile src="/static/icon_row_small.png"/>
  </div>
);

export default Welcome;
