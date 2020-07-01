import React, { useState } from "react"
import styled from "styled-components"

const BurgerContainer = styled.div`
  background-color: transparent;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 20%;
`
const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 0 auto;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #61dafb;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ drawerOpen }) => drawerOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ drawerOpen }) => drawerOpen ? '0' : '1'};
      transform: ${({ drawerOpen }) => drawerOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ drawerOpen }) => drawerOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Toggle = ( {drawerOpen, setDrawerOpen }) => {

  return (
    <BurgerContainer>
      <Burger drawerOpen={drawerOpen} onClick={() => setDrawerOpen(!drawerOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </BurgerContainer>
  )
}

export default Toggle