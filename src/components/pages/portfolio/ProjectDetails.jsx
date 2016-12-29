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
        <div className={STYLES.inside}>
          <div className={STYLES.featureOne}>
            <div className={STYLES.projectTab}></div>
            <div className={STYLES.tabName}>{project.name}</div>
            <div className={STYLES.insideBorder}>
              <div className={STYLES.description}>
                <div className={STYLES.desTitle}>DESCRIPTION</div>
                <div className={STYLES.desBlock}>
                  {project.description}
                </div>
                <div className={STYLES.techTitle}>TECHNOLOGIES</div>
                <div className={STYLES.techBlock}>
                  {project.technologies}
                </div>
              </div>
              <div className={STYLES.screenshots}>
                <div className={STYLES.screenTitle}>SCREENSHOTS</div>
                <div
                  onClick={this.openModal.bind(null, project.screenshotOne)}
                  className={STYLES[project.screenshotOne]}>
                </div>
                <div
                  onClick={this.openModal.bind(null, project.screenshotTwo)}
                  className={STYLES[project.screenshotTwo]}>
                </div>
                <ScreenshotModal
                  showModal={screenshot === project.screenshotOne || screenshot === project.screenshotTwo }
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
