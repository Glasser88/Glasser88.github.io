import React, { PropTypes } from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './ScreenshotModal.scss';

const ScreenshotModal = ({ showModal, closeModal, imageClass }) => (
  <Modal
    className={STYLES.ScreenshotModal} 
    show={showModal}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className={STYLES[imageClass]}></div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

ScreenshotModal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  imageClass: PropTypes.string,
}

export default ScreenshotModal;
