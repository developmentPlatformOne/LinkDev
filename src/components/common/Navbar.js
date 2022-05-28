import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps } from "react-router-dom";
// import Logo from '../../dist/img/logo.PNG';
import { Container, Nav, Navbar } from 'react-bootstrap';




const NavBar = () => {
    
  function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          className={ match ? "nav-link active" : "nav-link"}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
}

  return (
    <Navbar expand="lg">
      <Container>
        <Link className="navbar-brand" to="/Home">
          {/* <img src={Logo} alt="logo" /> */}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <CustomLink
              to="/Home"
            >
              Home
            </CustomLink>
            <CustomLink
              to="/AboutUs"
            >
              About Us
            </CustomLink>
            <CustomLink
              to="/News"
            >
              News
            </CustomLink>
            <CustomLink
              to="/ContactUs"
            >
              Contact Us
            </CustomLink>
            <CustomLink
              to="/Login"
            >
              Login
            </CustomLink>
            <CustomLink
              to="/SignUp"
            >
              Sign Up
            </CustomLink>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default NavBar;