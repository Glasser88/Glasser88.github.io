import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import STYLES from './Topbar.scss';

const NAV_LINKS = [
  {
    name: 'Portfolio',
    to: 'portfolio',
    spy: true,
    smooth: true,
    offset: -50,
    duration: 1000,
  },
  {
    name: 'About',
    to: 'about',
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1000,
  },
  {
    name: 'Contact',
    to: 'contact',
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1000,
  }
]

const Topbar = ({ handleSetActive }) => (
  <Navbar className={STYLES.Topbar} collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <div>
          <Link
            className={STYLES.brand}
            to="splashpage"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={handleSetActive}>
            <div className={STYLES.logo}><span>TG</span></div>
            <span className={STYLES.name}>Trevor Glass</span>
          </Link>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
   <Navbar.Collapse>
     <Nav className={STYLES.links} pullRight>
       { NAV_LINKS.map((location, i) => (
         <NavItem
           key={i}>
           <Link
             className={STYLES.link}
             activeClass="active"
             to={location.to}
             spy={location.spy}
             smooth={location.smooth}
             offset={location.offset}
             duration={location.duration}
             onSetActive={handleSetActive.bind(null, portfolio.to)}>
             {location.name}
           </Link>
         </NavItem>
       ))}
     </Nav>
   </Navbar.Collapse>
 </Navbar>
);

Topbar.propTypes = {
  handleSetActive: PropTypes.func,
}

export default Topbar;
