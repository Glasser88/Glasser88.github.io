import React from 'react';

import { PROJECTS } from '../../../constants/projects';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './ProjectRow.scss';

const ProjectRow = ({ setCurrentProject }) => (
  <div className={STYLES.ProjectRow}>
    { PROJECTS.map((project, i) => (
      <div key={i} className={STYLES.projectBox}>
        <div className={STYLES.open}>
          <Glyphicon
            onClick={setCurrentProject.bind(null, project)}
            glyph='new-window'
          />
        </div>
        <h2 onClick={setCurrentProject.bind(null, project)}>{project.name}</h2>
        <hr className={STYLES.line} />
        <div className={STYLES.details}>
          <h5>Y. <span className={STYLES.bold}>{project.year}</span></h5>
          <h5>C. <span className={STYLES.bold}>{project.company}</span></h5>
          <h5>T. <span className={STYLES.bold}>{project.mainTechnology}</span></h5>
        </div>
      </div>
    ))}
</div>
);

export default ProjectRow;
