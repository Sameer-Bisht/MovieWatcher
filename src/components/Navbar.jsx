import { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [openNav, setOpenNav] = useState({ham:true,navView:false});
  const websiteName = "Film Dekhli"
  //responsive  functionality
  const handleOnHamClick = ()=> { 
    setOpenNav({ham:!openNav.ham,navView:!openNav.navView})
  }
  if (window.innerWidth > 650) {
    return (
      <nav className="navbar">
      <div className="navbar-inside-container">

      <h3>{websiteName}</h3>

      <ul className="nav-links">
        <li onClick={() => window.location.pathname = "/"} >Home</li>
        <li>Watchlist</li>
        <li>Movie Reccomendations</li>
      </ul>
      </div>
      </nav>
    );
  } else {
  
    return (
      <nav className="navbar-container">
          <div className="navbar-phone">
            <h3 className="gradient">{websiteName}</h3>
            {
              openNav.ham ?
            <GiHamburgerMenu
              className="ham"
              onClick={() => handleOnHamClick()}
            />
            :
            <ImCross  className="ham"
              onClick={() => handleOnHamClick()}/>}
          </div>
        <ul className={`nav-links-phone dropdown ${openNav.navView ? "open" : ""}`}>
     <li onClick={() => window.location.pathname = "/"} >Home</li>
          <li>Watchlist</li>
          <li >Movie Reccomendations</li>
        </ul>
      </nav>
    );
  }
};
export default Navbar;
