import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null); // or false depending on your token state management
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      {/* Desktop Menu */}
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* Location Dropdown */}
      {/* Location Dropdown */}
<div className='relative'>
  <button
    onClick={() => setShowLocationMenu(!showLocationMenu)}
    className='flex items-center gap-2 bg-gray-200 p-2 rounded-full'>
    <LocationMarkerIcon className="w-4 h-4 text-gray-600" />
    <span>Select Location</span>
    <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
  </button>
  {showLocationMenu && (
    <div className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20'>
      <ul className='flex flex-col'>
        <li
          className='px-4 py-2 cursor-pointer hover:bg-gray-200'
          onClick={() => {
            navigate('/chennai');
            setShowLocationMenu(false); // Close the dropdown
          }}>
          Chennai
        </li>
        <li
          className='px-4 py-2 cursor-pointer hover:bg-gray-200'
          onClick={() => {
            navigate('/mumbai');
            setShowLocationMenu(false); // Close the dropdown
          }}>
          Mumbai
        </li>
        <li
          className='px-4 py-2 cursor-pointer hover:bg-gray-200'
          onClick={() => {
            navigate('/delhi');
            setShowLocationMenu(false); // Close the dropdown
          }}>
          Delhi
        </li>
        <li
          className='px-4 py-2 cursor-pointer hover:bg-gray-200'
          onClick={() => {
            navigate('/bangalur');
            setShowLocationMenu(false); // Close the dropdown
          }}>
          Bangalur
        </li>
      </ul>
    </div>
  )}
</div>


      {/* User Profile or Login Button */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={userData.image} alt="User Avatar" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className={`w-6 md:hidden ${showMenu ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-300`}
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${showMenu ? 'translate-x-0' : 'translate-x-full'} fixed right-0 top-0 bottom-0 z-20 bg-white transition-transform ease-in-out duration-300`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img src={assets.logo} className='w-36' alt="Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="close" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink onClick={() => setShowMenu(false)} to='/'>
            <p className='px-4 py-2 rounded-full inline-block'>HOME</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
            <p className='px-4 py-2 rounded-full inline-block'>ALL DOCTORS</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about'>
            <p className='px-4 py-2 rounded-full inline-block'>ABOUT</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact'>
            <p className='px-4 py-2 rounded-full inline-block'>CONTACT</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
