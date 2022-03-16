import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentView from './StudentView';
import { DEFAULT_VIEW, FEEDBACK_VIEW } from '../../../config/views';

// eslint-disable-next-line react/prefer-stateless-function
class StudentMode extends Component {
  static propTypes = {
    view: PropTypes.string,
  };

  static defaultProps = {
    view: DEFAULT_VIEW,
  };

  render() {
    const { view } = this.props;
    switch (view) {
      case FEEDBACK_VIEW:
      case DEFAULT_VIEW:
      default:
        return <StudentView />;
    }
  }
}

export default StudentMode;
