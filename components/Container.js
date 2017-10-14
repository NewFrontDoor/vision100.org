// @flow

import styled from 'react-emotion';
import {media} from '../config/constants';

export const createContainer = (type: ?string = 'div') => styled(type)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  ${media.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    max-width: 970px;
  }
  ${media.desktop} {
    max-width: 1170px;
  }
`;

export const Column = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.tablet} {
    flex-basis: ${({screen}) => screen.tablet};
  }
  ${media.desktop} {
    flex-basis: ${({screen}) => screen.desktop};
  }
`;

export default createContainer;
