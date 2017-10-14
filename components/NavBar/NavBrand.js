// @flow
import * as React from 'react';
import styled from 'react-emotion';
import {media} from '../../config/constants';

const BrandImage = styled.img`
  margin: 0;
  vertical-align: middle;
  width: 160px;
  ${media.tablet} {
    width: '250px'
  }
`;

const BrandLink = styled.a`
  text-align: right;
  display: inline-block;
  font-size: 1.25rem;
  line-height: 3rem;
  white-space: nowrap;
  ${media.tablet} {
    text-align: left
  }
`;

const NavBrand = () => (
  <BrandLink href="#focus">
    <BrandImage src="/static/logo-long-white.png" alt="focus logo"/>
  </BrandLink>
);

export default NavBrand;
