import React, { Component } from 'react';

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
        <h1>Contact Information</h1>
        <h3>To Reach Trevor Glass</h3>
        <div className={STYLES.phoneWrapper}>
          <div className={STYLES.phoneBox}>
          <div className={spinDial !== false ? STYLES.spinDial : STYLES.dialPhone }>
            <Button className={STYLES.one} disabled>1</Button>
            <Button
              className={STYLES.two}
              onClick={this.setSpinClass.bind(null, 'github')}>
              <i className='fa fa-github'></i>
            </Button>
            <Button className={STYLES.three} disabled>3</Button>
            <Button className={STYLES.four} disabled>4</Button>
            <Button
              className={STYLES.five}
              onClick={this.setSpinClass.bind(null, 'twitter')}>
              <i className='fa fa-twitter'></i>
            </Button>
            <Button className={STYLES.six} disabled>6</Button>
            <Button
              className={STYLES.seven}
              onClick={this.setSpinClass.bind(null, 'email')}>
              <i className='fa fa-envelope'></i>
            </Button>
            <Button className={STYLES.eight} disabled>8</Button>
            <Button className={STYLES.nine} disabled>9</Button>
            <Button
              className={STYLES.zero}
              onClick={this.setSpinClass.bind(null, 'linkedin')}>
              <i className='fa fa-linkedin'></i>
            </Button>
            <div className={STYLES.insideCircle}>
            </div>
          </div>
          <div className={STYLES.ring}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
