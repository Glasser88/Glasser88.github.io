import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scroll from 'react-scroll';

import Footer from './shared/Footer';

import Splashpage from '../components/pages/splashpage/Splashpage';
import Portfolio from '../components/pages/portfolio/Portfolio';
import About from '../components/pages/about/About';
import Contact from '../components/pages/contact/Contact';
import DividerOne from '../components/dividers/DividerOne';
import Interests from '../components/dividers/Interests';
import Skills from '../components/dividers/Skills';
import GoogleMaps from '../components/pages/maps/GoogleMaps';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './Wrapper.scss';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollToTopVisible: false,
    }

    this.handleSetActive = this.handleSetActive.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", to, element);
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

  handleSetActive(location) {
    if(location !== 'splashpage') {
      this.setState({
        scrollToTopVisible: true,
      })
    } else {
      this.setState({
        scrollToTopVisible: false,
      })
    }
  }

  render() {
    const { scrollToTopVisible } = this.state;

    return (
      <div className={STYLES.Wrapper}>
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
                  onSetActive={this.handleSetActive}>
                  <div className={STYLES.logo}><span>TG</span></div>
                  <span className={STYLES.name}>Trevor Glass</span>
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
         <Navbar.Collapse>
           <Nav className={STYLES.links} pullRight>
             <NavItem eventKey={1} href="#">
               <Link
                 className={STYLES.link}
                 activeClass="active"
                 to="portfolio"
                 spy={true}
                 smooth={true}
                 offset={-50}
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
          <Element name="splashpage">
            <Splashpage />
          </Element>
            <DividerOne />
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <Interests />
          <Element name="about">
            <About />
          </Element>
          <Skills />
          <Element name="contact">
            <Contact />
          </Element>
          <GoogleMaps />
            <a
              className={scrollToTopVisible ? STYLES.showScroller : STYLES.hideScroller}
              onClick={this.scrollToTop}>
              <Glyphicon glyph='menu-up' />
            </a>
        </section>
        <Footer />
      </div>
    )
  }
};

export default Wrapper;
