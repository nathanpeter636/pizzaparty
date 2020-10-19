import React from "react";

import styled from "styled-components";

import { pizzaRed } from "../Styles/colors";

import {Title} from "../Styles/title"

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};

  padding: 10px;

  width: 100%;
  position: fixed;
`;

const Logo = styled(Title)`

font-size: 20px;
color: white;
text-shadow: 1px 2px 4px #260202;
height: 60px;

`

//functional component so we can add hooks etc
export function Navbar() {

  return (

    <NavbarStyled>
      <Logo>PizzaParty 🍕 

      </Logo>
      </NavbarStyled>

    
      

 
  )
}
