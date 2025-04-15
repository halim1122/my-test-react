import React from 'react';

const NavBar = ({navLink}) => {
  return (
    <li className='mr-10'><a href={navLink.navigationPath}>{navLink.name}</a></li>
  );
};

export default NavBar;