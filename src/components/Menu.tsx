import React from "react";
import './Menu.css';

const Menu = ():JSX.Element => {
  return (
    <div className="menu">
      <span className="menu__item">소개</span>
      <span className="menu__item">일정</span>
    </div>
  );
}

export default Menu;