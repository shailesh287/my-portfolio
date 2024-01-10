import { BsMoon, BsSun } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollIndicator from '../ScrollIndicator';
import "../../App.css"
import "./header.css"
import { useApp } from '../Context/AppContext';

const Header = () => {
  const { state, dispatch } = useApp();
  const { theme } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const [bgBlur, setBgBlur] = useState(false);

  const handleThemeToggle = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: theme === 'light' ? 'dark' : 'light',
    });
  };

  useEffect(() => {
    const animation = gsap.fromTo(
      mobileMenuRef.current.children,
      { x: -300 },
      {
        x: 0,
        stagger: 0.02,
      }
    );

    return () => {
      animation.kill();
    };
  });

  useEffect(() => {
    function scrollChecker() {
      if (window.scrollY > 100) {
        setBgBlur(true);
      } else {
        setBgBlur(false);
      }
    }
    document.addEventListener('scroll', scrollChecker);

    return () => window.removeEventListener('scroll', scrollChecker);
  }, []);

  return (
    <div className={`header ${bgBlur ? 'bgBlurStyles' : ''}`}>
      <ScrollIndicator />
      <div className='w-full px-10'>
        <nav className='nav_container' >
          <button className='mobileMenu' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt2 />}
          </button>
          <nav
            className={`mobile_nav ${mobileMenuOpen ? 'open' : '' }` }
            ref={mobileMenuRef}
          >
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Contact
              </NavLink>
            </li>
          </nav>
          <ul className='main_navLink'>
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) => {
                  return isActive
                    ? 'active logo'
                    : isPending
                    ? 'pending logo'
                    : 'logo';
                }}
              >
             <span className='font-bold text-[--heading-color] text-xl'>Shailesh.Dev</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className='toggle cursor-pointer'  onClick={handleThemeToggle}>
           {theme === "light" ?  <BsSun /> :  <BsMoon />}
          </div>
        </nav >
      </div>
    </div>
  );
};

export default Header;

