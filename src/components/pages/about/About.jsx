import React, { Component } from 'react';

import VideoModal from './VideoModal';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Modal from 'react-bootstrap/lib/Modal';

import STYLES from './About.scss';

const resumePDF = require('../../../assets/docs/resume2017.pdf');

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    })
  }

  openModal() {
    this.setState({
      modalOpen: true,
    })
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div className={STYLES.About}>
        <div className={STYLES.inside}>
          <div className={STYLES.imageHolder}>
            <div className={STYLES.hockeyImage}></div>
            <div>
              <h2>The Story Of</h2>
              <h3>Trevor Glass</h3>
              <hr className={STYLES.line} />
              <div className={STYLES.story}>
                <p className={STYLES.one}>From hockey player to</p>
                <p className={STYLES.two}>Software Engineer my values have &nbsp;&nbsp;&nbsp; remained the same.</p>
                <p className={STYLES.three}>Always use</p>
                <p className={STYLES.four}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; my creativity and hard work to create opportunities. Dream of the impossible. And</p>
                <p className={STYLES.five}>always believe that anything is possible.</p>
              </div>
              <VideoModal
                show={modalOpen}
                onHide={this.closeModal}
              />
            </div>
          </div>
          <div className={STYLES.buttonBar}>
            <Button
              onClick={this.openModal}
              className={STYLES.videoButton}>
              <Glyphicon className={STYLES.film} glyph='film' />&nbsp;&nbsp;HOCKEY
            </Button>
            <a href={resumePDF} target='_blank'>
              <Button
                className={STYLES.pdfButton}>
                <span className={STYLES.pdf}><i className="fa fa-file-pdf-o"></i></span>&nbsp;&nbsp;RESUME
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
