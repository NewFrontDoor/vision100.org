// @flow

import styled from 'react-emotion';
import {media} from '../../config/constants';

const ToggleButton = styled.button`
  align-self: flex-start;
  padding-top: 12px;
  padding-right: 10px;
  padding-bottom: 12px;
  padding-left: 10px;
  margin-top: .5rem;
  margin-right: 1rem;
  margin-bottom: .5rem;
  background-color: transparent;
  background-image: none;
  border: 1px solid #333;
  border-radius: 4px;
  ${media.tablet} {
    display: none;
  }
`;

export default ToggleButton;
