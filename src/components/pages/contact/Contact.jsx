import React, { Component } from 'react';

import Phone from './Phone';

import STYLES from './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinClass: false,
    }

    this.setSpinClass = this.setSpinClass.bind(this);
  }

  setSpinClass(prop) {
    if(prop !== this.state.spinDial) {
      this.setState({
        spinClass: false,
      })
    }

    this.setState({
      spinClass: prop,
    })
  }

  render() {
    const { spinClass } = this.state;

    return (
      <div className={STYLES.Contact}>
        <div className={STYLES.bigWrapper}>
          <div className={STYLES.headings}>
            <h1>Dial Up The</h1>
            <h3>Contact Info For Trevor Glass</h3>
          </div>
          <div className={STYLES.phoneWrapper}>
            <Phone
              setSpinClass={this.setSpinClass}
              spinClass={spinClass}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
