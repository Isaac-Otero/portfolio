import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({children}) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/summer-over-under', label: 'Summer Over/Under' },
    { to: '/japanese-drill', label: 'Japanese Drill' },
    { to: '/evens-or-odds', label: 'Evens or Odds' },
    { to: '/reaction', label: 'Messaging Board' }
  ];

  return (
    <div className="bg-black">
      <nav className="top-nav" aria-label="Portfolio navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `top-nav-link${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  )
}
export default Header;
