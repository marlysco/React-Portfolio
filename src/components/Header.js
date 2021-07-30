import React from 'react';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";


function Header() {
return (
<nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
  <div className={"container-fluid"}>
    <div className={"navbar-brand"}>Marlys Clemente</div>
    <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
      <div className={"navbar-nav"}>
        <a className={"nav-link"} onClick={()=>{return <About></About>}}>About me</a>
        <a className={"nav-link"} onClick={()=>{return <Portfolio></Portfolio>}}>Portfolio</a>
        <a className={"nav-link"} onClick={()=>{return <Contact></Contact>}}>Contact</a>
      </div>
    </div>
  </div>
</nav>);
};

export default Header;