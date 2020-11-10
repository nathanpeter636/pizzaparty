import React from "react";

import styled from "styled-components";

import { pizzaRed } from "../Styles/colors";

import {Title} from "../Styles/title"

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};

  padding: 10px;

  width: 100%;
  position: fixed;
  z-index: 1000;
`;

const Logo = styled(Title)`

display: flex;
align-items: center;
font-size: 30px;
color: white;
text-shadow: 1px 2px 4px #260202;
height: 60px;

`;

// 



export function Navbar() {



  return (

    <NavbarStyled>
      <Logo>YourBusiness 🍕 

      </Logo>
      </NavbarStyled>

    
      

 
  )
}
