import React from 'react';
import NavItem from './NavItem';

const Nav = ({activeTab, onTabChange}) => {
  return (
    <nav className="App-nav">
      <ul>
        <NavItem
          tabName="items"
          activeTab={activeTab}
          onTabChange={onTabChange}
        >
          Items
        </NavItem>
        <NavItem 
          tabName="cart"
          activeTab={activeTab}
          onTabChange={onTabChange}
        >
          Cart
        </NavItem>
      </ul>
    </nav>
  )
};

export default Nav;
