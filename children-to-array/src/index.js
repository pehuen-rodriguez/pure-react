import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function ModalDialog({ children }) {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="modal-header">
      <h5 className="modal-title">Modal title</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="modal-body">
      <p>Modal body text goes here.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-primary">Save changes</button>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  );
}

ModalDialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node
  ])
};

function ErrorBox({ children }) {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <i className="fa fa-exclamation-triangle error-icon"></i>
      <strong>Danger!</strong> {children}
    </div>
  );
}

function Head({ children, count }) {
  const childrensArray = React.Children.toArray(children);
  return <div>You chosen to show {count} elements from the begining of the childrens prop. And this are them: {childrensArray.slice(0, count)}</div>;
}

function Tail({ children, count }) {
  const childrensArray = React.Children.toArray(children);
  return <div>You chosen to show {count} elements from the end of the childrens prop. And this are them: {childrensArray.slice(-count)}</div>;
}

function FirstChildOnly({ children }) {
  const childrensArray = React.Children.toArray(children);
  return <div>This was the first element: {childrensArray.shift()}</div>;
}

function LastChildOnly({ children }) {
  const childrensArray = React.Children.toArray(children);
  return <div>This was the last element: {childrensArray.pop()}</div>;
}

function Main() {
  const manyChildrens = [
    <span>El primero</span>,
    <span>El segundo</span>,
    <span>El tercero</span>,
    'HOLA'
  ];
  return (
    <div className="container">
      <ErrorBox children="The world is ending."/>
      <FirstChildOnly children="The world is ending"/>
      <LastChildOnly children={manyChildrens}/>
      <Head children={manyChildrens} count={2}/>
      <Tail children={manyChildrens} count={3}/>
      <ModalDialog>
        <Header/>
        <Body/>
        <Footer/>
      </ModalDialog>
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector('#root'));
