import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Modal from 'react-bootstrap/lib/Modal';

import STYLES from './About.scss';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      openModal: false,
    })
  }

  openModal() {
    this.setState({
      openModal: true,
    })
  }

  render() {
    const { openModal } = this.state;

    return (
      <div className={STYLES.About}>
        <div className={STYLES.inside}>
          <div className={STYLES.hockey}></div>
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
            <Button
              onClick={this.openModal}
              className={STYLES.videoButton}>
              <Glyphicon glyph='film' />
            </Button>
            <Modal show={openModal} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2KnfvwIPHLw?autoplay=1" frameBorder="0" allowfullscreen></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeModal}>Close</Button>
              </Modal.Footer>
            </Modal>
            <Button
              className={STYLES.pdfButton}>
              <i className="fa fa-file-pdf-o"></i>
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
