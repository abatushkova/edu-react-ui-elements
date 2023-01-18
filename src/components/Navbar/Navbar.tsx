import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { getTheme } from '../../utils/helpers/getTheme';
import './Navbar.scss';

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState(getTheme());
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  };

  const handleClickToggle = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleDebounceResize = () => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setScreenWidth(window.innerWidth);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleDebounceResize);

    return () => {
      window.removeEventListener('resize', handleDebounceResize);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">UI</NavLink>
      </div>
      <ul className={`navbar__list ${isMenuOpened || screenWidth >= 768 ? "navbar__list--opened" : ""}`}>
        <li>
          <NavLink to="/" className="navbar__link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/docs" className="navbar__link">Docs</NavLink>
        </li>
        <li>
          <NavLink to="/support" className="navbar__link">Support</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="navbar__link">Blog</NavLink>
        </li>
        <li>
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </li>
      </ul>
      <button
        type="button"
        className={`navbar__burger ${isMenuOpened && "navbar__burger--active"}`}
        onClick={handleClickToggle}
      >
        <span aria-hidden="true" className="navbar__cross"></span>
        <span aria-hidden="true" className="navbar__cross"></span>
        <span aria-hidden="true" className="navbar__cross"></span>
        <span className="visually-hidden">Toggle Menu</span>
      </button>
    </nav>
  );
}
