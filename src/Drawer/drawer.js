import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #61dafb;
  height: 100vh;
  max-height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ drawerOpen }) => drawerOpen ? 'translateX(0)' : 'translateX(-100%)'};
  width: 400px;

  @media (max-width: 399px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #282c34;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

const Drawer = ({ drawerOpen }) => {
  return (
    <Nav drawerOpen={drawerOpen}>
      <a href="/">Link 1</a>
      <a href="/">Link 2</a>
      <a href="/">Link 3</a>
      <a href="/">Link 4</a>
    </Nav>
  )
}

export default Drawer