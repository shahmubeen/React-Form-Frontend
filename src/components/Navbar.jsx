import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuTwoOpen, setSubmenuTwoOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubmenuTwoToggle = () => {
    setSubmenuTwoOpen(!submenuTwoOpen);
  };

  const closeSubmenus = () => {
    setSubmenuOpen(false);
    setSubmenuTwoOpen(false);
  };

  const navigate = useNavigate()

  const { auth, setAuth } = useAuth();


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={"/"}><span className="navbar-brand"><b>LOGO</b></span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"}><span className="nav-link active" aria-current="page">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link to={"about"}><span className="nav-link active" aria-current="page">About</span></Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"}><span className="nav-link active" aria-current="page">Contact</span></Link>
            </li>
            {auth ? <li className={`nav-item dropdown ${submenuOpen ? 'show' : ''}`} onMouseEnter={handleSubmenuToggle} onMouseLeave={closeSubmenus}>
              <span className="nav-link active dropdown-toggle" role="button">
                Products
              </span>
              <ul className={`dropdown-menu ${submenuOpen ? 'show' : ''}`}>
                <li><Link to={"products/watches"}><span className="dropdown-item">Watches</span></Link></li>
                <li><Link to={"products/perfumes"}><span className="dropdown-item">Perfumes</span></Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li className={`dropdown-submenu ${submenuTwoOpen ? 'show' : ''}`}>
                  <span className="dropdown-item dropdown-toggle" onMouseEnter={handleSubmenuTwoToggle}>Vehicles</span>
                  <ul className={`submenu dropdown-menu ${submenuTwoOpen ? 'show' : ''}`}>
                    <li><Link to={"products/vehicles/bikes"}><span className="dropdown-item">Bikes</span></Link></li>
                    <li><Link to={"products/vehicles/cars"}><span className="dropdown-item">Cars</span></Link></li>
                  </ul>
                </li>
              </ul>
            </li> : ""}

          </ul>
          <form className="d-flex" role="search">
            {auth ? <button className="btn btn-danger" onClick={() => { setAuth(false); navigate('login'); }}>LogOut</button> :
              <button className="btn btn-success" onClick={() => { navigate('login') }}>LogIn</button>}
          </form>
        </div>
      </div>
    </nav>
  )
}
