import React from 'react';

import { Link } from 'react-router';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import STYLES from './Topbar.scss';

const Topbar = () => (
  <Navbar className={STYLES.Topbar} collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <div>
         <Link className={STYLES.brand} to="/">
           <div className={STYLES.logo}>TG</div>
           <span className={STYLES.name}>Trevor Glass</span>
         </Link>
       </div>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav pullRight className={STYLES.links}>
       <NavItem eventKey={1} href="#"><Link to="portfolio" className={STYLES.link}>Portfolio</Link></NavItem>
       <NavItem eventKey={2} href="#"><Link to="about" className={STYLES.link}>About</Link></NavItem>
       <NavItem eventKey={3} href="#"><Link to="contact" className={STYLES.link}>Contact</Link></NavItem>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
);

export default Topbar;
