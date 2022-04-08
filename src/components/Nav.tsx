import React from "react";
import Nav from 'react-bootstrap/Nav';

interface NavProps{

}

const Navbar: React.FC<NavProps>=() => {

  return(
    <Nav
      activeKey="/"
    >
      <Nav.Item>
        <Nav.Link href="/">Todo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar;