import React from 'react';

const Link = ({navLink}) => {
  return (
    <li className='hover:bg-gray-500 hover:text-gray-200 p-1 rounded-md'><a href={navLink.navigationPath}>{navLink.name}</a></li>
  );
};

export default Link;