import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProjectRow from './ProjectRow';
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
        <div className={STYLES.projectTab}>
          <h4>PROJECTS</h4>
        </div>
        <ProjectRow
          setCurrentProject={this.setCurrentProject}
        />
      </div>
    );
  }

  render() {
    const { project } = this.state;

    return (
      <div className={STYLES.Portfolio}>
        <h2>My Portfolio With</h2>
        <h3>A Few Of My Favorites</h3>
        <hr className={STYLES.line} />
        <div>
          <ReactCSSTransitionGroup
            className={STYLES.folderWrapper}
            component="div"
            transitionName="projectAnimation"
            transitionEnterTimeout={350}
            transitionLeaveTimeout={350}>
          { project === null && this.renderListView() }
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            className={STYLES.folderWrapper}
            component="div"
            transitionName="projectAnimation"
            transitionEnterTimeout={350}
            transitionLeaveTimeout={350}>
            { project !== null && (this.renderProject(project)) }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Portfolio;
