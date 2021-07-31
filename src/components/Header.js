import React from 'react';
import { useLocation, Link} from "react-router-dom"

function Header() {
const location = useLocation();
return (
<nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
  <div className={"container-fluid"}>
    <div className={"navbar-brand"}>Marlys Clemente</div>
    <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
      <div className={"navbar-nav"}>
        <Link className={location.pathname === '/' ? "nav-link active" : "nav-link"} to="/about">About</Link>
        <Link className={location.pathname === '/portfolio'? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
        <Link className={location.pathname === '/contact' ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
      </div>
    </div>
  </div>
</nav>
);
};

export default Header;