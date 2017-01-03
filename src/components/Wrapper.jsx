import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scroll from 'react-scroll';

import Topbar from './shared/Topbar';
import Footer from './shared/Footer';

import Splashpage from '../components/pages/splashpage/Splashpage';
import Portfolio from '../components/pages/portfolio/Portfolio';
import About from '../components/pages/about/About';
import Contact from '../components/pages/contact/Contact';
import DividerOne from '../components/dividers/DividerOne';
import DividerTwo from '../components/dividers/DividerTwo';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import STYLES from './Wrapper.scss';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class Wrapper extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {

    return (
      <div className={STYLES.Wrapper}>
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
           <Nav pullRight>
             <NavItem eventKey={1} href="#">
               <Link
                 className={STYLES.link}
                 activeClass="active"
                 to="portfolio"
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={1000}
                 onSetActive={this.handleSetActive}>
                 Portfolio
               </Link>
             </NavItem>
             <NavItem eventKey={2} href="#">
               <Link
                 className={STYLES.link}
                 activeClass="active"
                 to="about"
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={1000}
                 onSetActive={this.handleSetActive}>
                 About
               </Link>
             </NavItem>
              <NavItem eventKey={3} href="#">
                <Link
                  className={STYLES.link}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onSetActive={this.handleSetActive}>
                  Contact
                </Link>
              </NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
        <section>
          <Splashpage />
          <DividerOne />
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <DividerTwo />
          <Element name="about">
            <About />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
            <a onClick={this.scrollToTop}>To the top!</a>
        </section>
        <Footer />
      </div>
    )
  }
};

export default Wrapper;
