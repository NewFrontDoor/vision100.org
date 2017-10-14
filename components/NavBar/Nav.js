// @flow

import * as React from 'react';
import styled from 'react-emotion';
import {Link} from 'react-scroll';
import {media} from '../../config/constants';

const NavCollapse = styled.div`
  max-height: 340px;
  overflow-x: visible;
  padding-top: .5rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
  --webkit-overflow-scrolling: touch;
  height: ${({collapsed}) => collapsed ? '1px' : 'auto'};
  display: ${({collapsed}) => collapsed ? 'none' : 'block'};
  margin-left: -1rem;
  margin-right: -1rem;
  ${media.tablet} {
    height: auto;
    display: flex;
    flex-basis: 100;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  padding-left: 0;
  margin: 0;
  flex-basis: 100%;
  list-style: none;
  ${media.tablet} {
    justify-content: flex-end;
  }
`;

const NavItem = styled.li`
  display: list-item;
  margin-bottom: 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 10px 1rem;
  color: #FFF;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: normal;
  line-height: 30px;
  text-decoration: none;
  &:hover {
    color: #FFF;
    text-decoration: none;
  }
  &:active {
    color: #FFF;
    text-decoration: none;
  }
  &:visited {
    color: #FFF;
    text-decoration: none;
  }
  ${media.tablet} {
    padding: 0 30px;
  }
`;

export type Props = {
  collapsed: boolean
};

const Nav = ({collapsed}: Props) => {
  return (
    <NavCollapse collapsed={collapsed}>
      <NavList>
        <NavItem>
          <NavLink href="#home" to="home" smooth duration={500} offset={-70}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#events"
            to="events"
            smooth
            duration={500}
            offset={-70}
          >
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#involved"
            to="involved"
            smooth
            duration={500}
            offset={-70}
          >
            Get involved
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about" to="about" smooth duration={500} offset={-70}>
            About us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#contact"
            to="contact"
            smooth
            duration={500}
            offset={-70}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </NavCollapse>
  );
};

export default Nav;
