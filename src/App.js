import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'
import Toggle from './Drawer/toggle'
import Drawer from './Drawer/drawer'

const Nav = styled.nav`

`

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Nav>
          <Toggle drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A drawer component for stashing things away off screen
        </p>
        <a
          className="App-link"
          href="https://github.com/kenput3r/react-drawer"
          target="_blank"
          rel="noopener noreferrer"
        >
          view the repo on github
        </a>
      </header>
      <Drawer drawerOpen={drawerOpen} />
    </div>
  );
}

export default App
