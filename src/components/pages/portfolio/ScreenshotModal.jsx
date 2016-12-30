import React, { PropTypes } from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './ScreenshotModal.scss';

const ScreenshotModal = ({ showModal, closeModal, imageClass, heading }) => (
  <Modal
    className={STYLES.ScreenshotModal}
    show={showModal}
    onHide={closeModal}>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      <div className={STYLES.body}>
        <div className={STYLES[imageClass]}></div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button className={STYLES.closeButton} onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

ScreenshotModal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  imageClass: PropTypes.string,
  heading: PropTypes.string,
}

export default ScreenshotModal;
