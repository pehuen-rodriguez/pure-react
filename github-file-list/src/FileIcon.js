import React from 'react';
import PropTypes from 'prop-types';
export const FileIcon = ({ file }) => <i className={file.type === "folder" ? "fa fa-folder" : "fa fa-file-text-o"} />;
FileIcon.propTypes = {
  file: PropTypes.shape({
    type: PropTypes.string.isRequired
  })
};
