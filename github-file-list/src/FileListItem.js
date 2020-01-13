import React from 'react';
import Time from './Time';
import { CommitMessage } from './CommitMessage';
import { FileIcon } from './FileIcon';
import { FileName } from './FileName';
export const FileListItem = ({ file }) => (<tr className="file-list-item" key={file.id}>
  <td className="file-icon"><FileIcon file={file} /></td>
  <td className="file-name"><FileName file={file} /></td>
  <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
  <td className="age"><Time time={file.updated_at} /></td>
</tr>);
