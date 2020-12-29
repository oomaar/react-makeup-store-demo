import React from 'react';
import { Nav, NavLink, NavIcon } from './NavbarElements';
import {Bars} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>Brand</NavLink> */}
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
