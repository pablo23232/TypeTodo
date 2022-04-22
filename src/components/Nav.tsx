import React from "react";
import Nav from 'react-bootstrap/Nav';
import {Todo} from './TodoList'

interface NavProps{
  todos?:Todo[];
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
        <Nav.Link data-testid="navAbout"  href="/about" >About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-testid="navGraph" href="/graphycs">Graficas</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar;