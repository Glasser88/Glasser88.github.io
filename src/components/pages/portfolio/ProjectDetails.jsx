import React, { Component, PropTypes } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import ScreenshotModal from './ScreenshotModal';

import STYLES from './ProjectDetails.scss'

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenshot: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(prop) {
    this.setState({
      screenshot: prop,
    })
  }

  closeModal() {
    this.setState({
      screenshot: null,
    })
  }

  render() {
    const { project, goBack } = this.props;
    const { screenshot } = this.state;

    return (
      <div className={STYLES.ProjectDetails}>
        <h5 onClick={goBack}>
          <Glyphicon className={STYLES.back} glyph='menu-left' /> Back To Projects
        </h5>
        <div className={STYLES.folderWrapper}>
          <div className={STYLES.projectFolder}>
            <div className={STYLES.projectTab}>
              <h3 className={STYLES.projectName}>{project.name}</h3>
            </div>
            <div className={STYLES.projectBorder}>
              <div className={STYLES.description}>
                <h4 className={STYLES.descriptionHeader}>DESCRIPTION</h4>
                <p className={STYLES.descriptionText}>{project.description}</p>
                <h4 className={STYLES.techHeader}>TECHNOLOGIES</h4>
                <p className={STYLES.techText}>{project.technologies}</p>
              </div>
              <div className={STYLES.screenshots}>
                <h4 className={STYLES.screenHeader}>SCREENSHOT</h4>
                <div
                  onClick={this.openModal.bind(null, project.screenshotOne)}
                  className={STYLES[project.screenshotOne]}>
                </div>
                <ScreenshotModal
                  showModal={screenshot === project.screenshotOne }
                  closeModal={this.closeModal}
                  imageClass={screenshot}
                />
              </div>
              <a href={project.link} target="_blank">
                <Button className={STYLES.viewProject}>
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProjectDetails.propTypes = {
  goBack: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
