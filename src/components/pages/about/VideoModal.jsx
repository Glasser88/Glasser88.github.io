import React, { PropTypes } from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const VideoModal = ({ openModal, closeModal }) => (
  <Modal show={openModal} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Memorial Cup Championship Run</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2KnfvwIPHLw?autoplay=1"
        frameBorder="0"
        allowfullscreen>
      </iframe>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

VideoModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
}

export default VideoModal;
