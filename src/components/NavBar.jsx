import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  {
    id: 1,
    name: "Home",
    navigationPath: "/"
  },
  {
    id: 2,
    name: "About",
    navigationPath: "/about"
  },
  {
    id: 3,
    name: "Services",
    navigationPath: "/services"
  },
  {
    id: 4,
    name: "Blog",
    navigationPath: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    navigationPath: "/contact"
  }
];


const NavBar = () => {

  const [open, setOpen] = useState(false);
  const links = navigationItems.map(navLink => <Link key={navLink.id} navLink={navLink}></Link>);
  return (
    <div>
      <nav className='flex justify-between items-center my-4 mx-10 md:text-2xl text-xl'>
        <span className='flex gap-4'>
          <button className='md:hidden' onClick={() => setOpen(!open)}>{
            open ?
              <X></X> :
              <Menu></Menu>
          }</button>
          <ul className={`absolute md:hidden bg-gray-300 top-16 p-4 duration-500
            ${open ? 'left-8' : '-left-64'}
            rounded-lg text-xl`}>
              {links}
            </ul>
          <h3 className='font-bold'>My Navbar</h3>
        </span>
        <ul className='md:flex hidden gap-10'>
          {
            links
          }
        </ul>
        <button className='btn text-xl'>Sign in</button>
      </nav>

      {/* <ul className='flex justify-center'>
      {
        navigationItems.map(navLink => <li className='mr-10'><a href={navLink.navigationPath}>{navLink.name}</a></li>)
      }
      </ul> */}
      {/* <ul className='flex'>
      <li className='mr-10'><a href="/">Home</a></li>
      <li className='mr-10'><a href="/about">About</a></li>
      <li className='mr-10'><a href="/blog">Blog</a></li>
    </ul> */}
    </div>
  );
};

export default NavBar;