import React from 'react';

const NavItem = ({tabName, activeTab, onTabChange, children}) => {
  const itemClass = tabName =>
    `App-nav-item ${
      activeTab === tabName ? 'selected' : ''
    }`;

  return (
    <li className={itemClass(tabName)}>
      <button onClick={() => onTabChange(tabName)}>
        {children}
      </button>
    </li>
  );
};

export default NavItem;
