// @flow

import * as React from 'react';
import styled from 'react-emotion';
import {Events} from 'react-scroll';
import SrOnly from '../SrOnly';
import {createContainer} from '../Container';
import {media} from '../../config/constants';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import NavBrand from './NavBrand';

const FixedNavBar = styled.header`
  background-image: url(/static/background.jpg);
  background-repeat: repeat-x;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10;
  ${media.tablet} {
    margin-bottom: 20px;
  }
`;

const NavBarContainer = styled(createContainer('nav'))`
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    flex-direction: row;
  }
`;

const IconBar = styled.div`
  background-color: #fff;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-top: ${({marginTop}) => marginTop};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type State = {
  collapsed: boolean;
};

class NavBar extends React.Component<{}, State> {
  state = {
    collapsed: true
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.setState({collapsed: true});
    });
  }

  handleCollapse = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({collapsed: !this.state.collapsed});
  };

  render() {
    return (
      <FixedNavBar>
        <NavBarContainer role="navigation">
          <FlexContainer>
            <NavBrand/>
            <ToggleButton type="button" onClick={this.handleCollapse}>
              <SrOnly>Toggle navigation</SrOnly>
              <IconBar/>
              <IconBar marginTop="4px"/>
              <IconBar marginTop="4px"/>
            </ToggleButton>
          </FlexContainer>
          <Nav collapsed={this.state.collapsed}/>
        </NavBarContainer>
      </FixedNavBar>
    );
  }
}

export default NavBar;
