import React, { PropTypes } from 'react';

import Button from 'react-bootstrap/lib/Button';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './ProjectDetails.scss'

const ProjectDetails = ({ project, goBack }) => (
  <div className={STYLES.ProjectDetails}>
    <h5 onClick={goBack}>
      <Glyphicon className={STYLES.back} glyph='menu-left' /> Back To Projects
      </h5>
    <div className={STYLES.inside}>
      <div className={STYLES.featureOne}>
        <h3>{project.name}</h3>
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
            <div className={STYLES[project.screenshotOne]}></div>
            <div className={STYLES.appImage}></div>
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
);

ProjectDetails.propTypes = {

};

export default ProjectDetails;
