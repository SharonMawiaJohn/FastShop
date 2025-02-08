import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './NavBar.module.css';
import NavBarLink from './NavBarLink';
import numCartItems from '../layout/MainLayout'

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
      <div className="container">
        {/* Logo / Brand Name */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          FastShopping
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links & Cart Button */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <NavBarLink />  {/* Rendered once here, removing duplicate nav items */}
          
          {/* Shopping Cart Button */}
          <Link to="/cart" className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
            <FaShoppingCart size={18} />
            {numCartItems == 0 || <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
              style={{ fontSize: '0.85rem', padding: '0.5em 0.65em', backgroundColor: '#6050DC' }}
            >
              {numCartItems}
            </span> }
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
