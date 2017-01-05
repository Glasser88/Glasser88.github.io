import React, { Component } from 'react';

import VideoModal from './VideoModal';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Modal from 'react-bootstrap/lib/Modal';

import STYLES from './About.scss';

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
          <div className={STYLES.hockey}></div>
          <div className={STYLES.stickOne}>
            <span className={STYLES.brand}>TREVOR GLASS</span>
          </div>
          <div className={STYLES.testTwo}></div>
          <div className={STYLES.blade}>
            <div className={STYLES.tape}></div>
            <div className={STYLES.tapeTwo}></div>
            <div className={STYLES.tapeThree}></div>
          </div>
          <div>
            <h2>The Story Of</h2>
            <h3>Trevor Glass</h3>
            <hr className={STYLES.line} />
            <div className={STYLES.story}>
              <p className={STYLES.one}>From hockey player to</p>
              <p className={STYLES.two}>Software Engineer my values have &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; remained the same.</p>
              <p className={STYLES.three}>Always use</p>
              <p className={STYLES.four}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; my creativity and hard work to create opportunities. Dream of the impossible. And</p>
              <p className={STYLES.five}>always believe that anything is possible.</p>
            </div>
            <Button
              onClick={this.openModal}
              className={STYLES.videoButton}>
              <Glyphicon glyph='film' />
            </Button>
            <Glyphicon className={STYLES.arrowOne} glyph='share-alt' />
            <h4 className={STYLES.highlights}>Hockey Highlights</h4>
            <VideoModal
              show={modalOpen}
              onHide={this.closeModal}
            />
          <a href="../../../assets/docs/resume2017.pdf" target='_blank'>
            <Button
              className={STYLES.pdfButton}>
              <i className="fa fa-file-pdf-o"></i>
            </Button>
          </a>
            <Glyphicon className={STYLES.arrowTwo} glyph='share-alt' />
            <h4 className={STYLES.resume}>Printable Resume</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
