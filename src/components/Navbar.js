import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <p>EGANY</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Benefit</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default Navbar;