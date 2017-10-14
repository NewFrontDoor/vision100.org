// @flow

import * as React from 'react';
import styled from 'react-emotion';

const Mug = styled.img`
  background-color: #036;
  float: left;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

type Props = {
  h2?: string;
  h3?: string;
  teamImg?: string;
  text?: string;
  children?: React.Node;
};

const Blurb = ({h2, h3, teamImg, children, text}: Props) => (
  <div>
    {h2 && <h2>{h2}</h2>}
    {h3 && <h3>{h3}</h3>}
    {teamImg && <Mug src={teamImg}/>}
    {children}
    {text && (
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: text}}
      />
    )}
  </div>
 );

Blurb.defaultProps = {
  h2: undefined,
  h3: undefined,
  teamImg: undefined,
  text: undefined,
  children: undefined
};

export default Blurb;
