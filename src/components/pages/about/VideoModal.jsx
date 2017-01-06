import React, { PropTypes } from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './VideoModal.scss';

const VideoModal = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    className={STYLES.VideoModal}>
    <Modal.Header closeButton>
      <Modal.Title>Memorial Cup Championship Run</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className={STYLES.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/2KnfvwIPHLw?autoplay=1"
          frameBorder="0"
          allowFullscreen>
        </iframe>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

VideoModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

export default VideoModal;
