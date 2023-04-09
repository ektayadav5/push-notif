import React from 'react'
import '../components/navbar.css'
import logo from './images/logoprop.svg'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
// rgb(243, 249, 254)
export default function CollapsibleExample() {

  const [navbarBgColor, setNavbarBgColor] = useState('transparent');
  const [navbarBoxShadow, setNavbarBoxShadow] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 0) {
        setNavbarBgColor('#fff'); // update background color if user scrolled down
        setNavbarBoxShadow('0px 20px 29px 2px rgba(0,0,0,0.2)');
      } else {
        setNavbarBgColor('rgb(243, 249, 254)'); // revert background color if user scrolls back to top
        setNavbarBoxShadow('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky='top' style={{ backgroundColor: navbarBgColor, boxShadow: navbarBoxShadow  }}>
    <Container className='whole'>
      <Navbar.Brand href="#home"><img className='logo' src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" >
          <NavDropdown className='nav_items'  title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='nav_items' title="Solutions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='nav_items' title="Ad Formats" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='nav_items' title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='nav_items' title="Company" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className='nav_items'>
          <Nav.Link  style={{fontSize:'larger',fontWeight:'1000',color:'rgb(97, 100, 102)',marginBottom:'7px'}} href="/">Blog</Nav.Link>
          </Nav>
          
            </Nav>
            <div className='butts'>
            <button class="btn  login active" style={{height:'55px',width:'100px',fontSize:'larger',fontWeight:'700',color:'rgb(19, 175, 130)'}} type="submit">Login</button>
            <button class="signup" style={{height:'55px',width:'100px',fontSize:'larger',fontWeight:'700'}} type="submit">Start</button>
            </div>
            </Navbar.Collapse>
            </Container>
            </Navbar>
  )
}


// 243 249 254