import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='NavbarContainer'>
      <NavLink to='/' className='NavbarLink'>Home</NavLink> 
      <NavLink to='/courses' className='NavbarLink'>Courses</NavLink> 
      <NavLink to='/courses/played' className='NavbarLink'>Played Courses</NavLink> 
      <NavLink to='/courses/international' className='NavbarLink'>International</NavLink> 
    </div>
  );
};

export default NavBar;