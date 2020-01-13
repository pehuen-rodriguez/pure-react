import React from 'react';
import PropTypes from 'prop-types';
export const CommitMessage = ({ commit }) => <span>{commit.message}</span>;
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};
