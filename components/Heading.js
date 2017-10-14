// @flow

import styled from 'react-emotion';
import {media} from '../config/constants';

const Heading = styled.h2`
  position: relative;
  ${media.desktop} {
    :before {
      content: ' ';
      background-image: ${({image}) => image && `url(${image})`};
      background-repeat: no-repeat;
      background-position: bottom;
      width: 70px;
      left: -80px;
      bottom: -10px;
      height: 100px;
      position: absolute;
    }
  }
`;

export default Heading;
