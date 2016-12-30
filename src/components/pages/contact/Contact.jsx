import React, { Component } from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './Contact.scss';

const GITHUB = (
  <a href="https://github.com/Glasser88" target='_blank'>Glasser88</a>
);

const EMAIL = (
  <a href='mailto:glasser1988@gmail.com?subject=Your hired!'>glasser1988@gmail.com</a>
);

const TWITTER = (
  <a href="https://twitter.com/Glasser1988" target='_blank'>Glasser1988</a>
);

const LINKEDIN = (
  <a href='https://www.linkedin.com/pub/trevor-glass/51/484/102' target='_blank'>Trevor Glass</a>
);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinDial: false,
    }

    this.setSpinClass = this.setSpinClass.bind(this);
  }

  setSpinClass(prop) {
    console.log('clicked');
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
            <h1>Contact Info To</h1>
            <h3>Contact Trevor Glass</h3>
          </div>
          <div className={STYLES.phoneWrapper}>
            <div className={STYLES.phoneBox}>
            <div className={STYLES.dialPhone}>
              <Button className={STYLES.one} disabled>1</Button>
              <Button
                className={STYLES.two}
                onClick={this.setSpinClass.bind(null, GITHUB)}>
                <i className='fa fa-github'></i>
              </Button>
              <Button className={STYLES.three} disabled>3</Button>
              <Button className={STYLES.four} disabled>4</Button>
              <Button
                className={STYLES.five}
                onClick={this.setSpinClass.bind(null, TWITTER)}>
                <i className='fa fa-twitter'></i>
              </Button>
              <Button className={STYLES.six} disabled>6</Button>
              <Button
                className={STYLES.seven}
                onClick={this.setSpinClass.bind(null, EMAIL)}>
                <i className='fa fa-envelope'></i>
              </Button>
              <Button className={STYLES.eight} disabled>8</Button>
              <Button className={STYLES.nine} disabled>9</Button>
              <Button
                className={STYLES.zero}
                onClick={this.setSpinClass.bind(null, LINKEDIN)}>
                <i className='fa fa-linkedin'></i>
              </Button>
              <div className={STYLES.insideCircle}>
              </div>
            </div>
            <div className={STYLES.ring}></div>
            <div className={STYLES.infoCircle}>
              <div className={STYLES.info}>{spinDial ? spinDial : null}</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
