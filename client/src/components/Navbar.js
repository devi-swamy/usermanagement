import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link className="nav-link " to="/">Login In</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/forgot" tabindex="-1" aria-disabled="true">Forgot Password</Link>
      </li>
    </ul>
  </div>
    )
}

export default Navbar
