import React, { Component } from 'react';

import { Link } from 'react-router';

import ProjectDetails from './ProjectDetails';

import { PROJECTS } from '../../../constants/projects';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null,
    };

    this.setCurrentProject = this.setCurrentProject.bind(this);
    this.returnToProjects = this.returnToProjects.bind(this);
  }

  setCurrentProject(prop) {
    this.setState({
      project: prop,
    })
  }

  returnToProjects() {
    this.setState({
      project: null,
    })
  }

  renderProject(project) {
    return (
      <ProjectDetails
        project={project}
        goBack={this.returnToProjects}
      />
    );
  }

  renderListView() {
    return (
      <div className={STYLES.projectFolder}>
        <div className={STYLES.projectTab}></div>
        <div className={STYLES.tabName}>Projects</div>
          <div className={STYLES.projectHolder}>
          { PROJECTS.map((project, i) => (
            <div key={i} className={STYLES.projectBox}>
              <div className={STYLES.open}>
                <Glyphicon
                  onClick={this.setCurrentProject.bind(null, project)}
                  glyph='new-window'
                />
              </div>
              <h2 onClick={this.setCurrentProject.bind(null, project)}>{project.name}</h2>
              <hr className={STYLES.line} />
              <div className={STYLES.details}>
                <h5>Y. <span className={STYLES.bold}>{project.year}</span></h5>
                <h5>C. <span className={STYLES.bold}>{project.company}</span></h5>
                <h5>T. <span className={STYLES.bold}>{project.mainTechnology}</span></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { project } = this.state;

    return (
      <div className={STYLES.Portfolio}>
        <h1>My Portfolio</h1>
        <div className={STYLES.folderWrapper}>
          { project === null && this.renderListView() }
          { project !== null && this.renderProject(project) }
        </div>
      </div>
    );
  }
}

export default Portfolio;
