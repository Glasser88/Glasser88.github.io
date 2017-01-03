import React, { Component } from 'react';

import DialPhone from './DialPhone';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinDial: false,
    }

    this.setSpinClass = this.setSpinClass.bind(this);
  }

  setSpinClass(prop) {
    if(prop !== this.state.spinDial) {
      this.setState({
        spinDial: false,
      })
    }

    this.setState({
      spinDial: prop,
    })
  }

  render() {
    const { spinDial } = this.state;

    return (
      <div className={STYLES.Contact}>
        <div className={STYLES.bigWrapper}>
          <div className={STYLES.headings}>
            <h1>Dial Up The</h1>
            <h3>Contact Info For Trevor Glass</h3>
          </div>
          <div className={STYLES.phoneWrapper}>
            <DialPhone
              setSpinClass={this.setSpinClass}
              spinDial={spinDial}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
