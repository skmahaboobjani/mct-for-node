import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css"

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Nav() {
//   const location = useLocation();

//   return (
//     <nav>
//       <ul>
//         <li className={location.pathname === '/' ? 'active' : ''}><Link to="/home">Home</Link></li>
//         <li className={location.pathname === '/login' ? 'active' : ''}><Link to="/login">Login</Link></li>
//         <li className={location.pathname === '/product' ? 'active' : ''}><Link to="/product">Product</Link></li>
//         <li className={location.pathname === '/user' ? 'active' : ''}><Link to="/user">User</Link></li>
//         <li className={location.pathname === '/contact-us' ? 'active' : ''}><Link to="/contact-us">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;

