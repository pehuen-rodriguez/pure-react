import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({ children }) {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <i className="fa fa-exclamation-triangle error-icon"></i>
      <strong>Danger!</strong> {children}
    </div>
  );
}

function Main() {
  return (
    <div class="container">
      <ErrorBox children="The world is ending."/>
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector('#root'));
