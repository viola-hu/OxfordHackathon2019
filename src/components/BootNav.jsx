import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


class BootNav extends Component{

  render(){
    return(
      <Navbar className='nav-image' xpand="lg">
        <Navbar.Brand style={{color: 'white'}} href="/"><Image style={{maxHeight:'2.5em'}} src={process.env.PUBLIC_URL +`/oxford.png`}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color: 'white'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default BootNav;
