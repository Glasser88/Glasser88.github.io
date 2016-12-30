import React, { PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Topbar from './shared/Topbar';
import Footer from './shared/Footer';

import STYLES from './Wrapper.scss';

const Wrapper = ({ children, location  }) => (
  <div className={STYLES.Wrapper}>
    <Topbar />
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={350}
      transitionLeaveTimeout={350}
    >
    { React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
    <Footer />
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.object,
};

export default Wrapper;
