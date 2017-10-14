// @flow

import * as React from 'react';
import styled from 'react-emotion';

const FrameContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  height: 500px;
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const SideBar = () => (
  <FrameContainer>
    <IFrame
      title="facebook"
      src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Ffocustas&amp;colorscheme=light&amp;height=500&amp;show_faces=true&amp;header=false&amp;stream=true&amp;show_border=false&amp;appId=114634505698"
      scrolling="no"
      allowTransparency="true"
    />
  </FrameContainer>
);

export default SideBar;
