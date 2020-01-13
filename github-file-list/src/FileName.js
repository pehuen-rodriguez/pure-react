import React from 'react';
import PropTypes from 'prop-types';
export const FileName = ({ file }) => <span>{file.name}</span>;
FileName.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};
