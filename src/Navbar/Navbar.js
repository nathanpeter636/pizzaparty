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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Title)`

display: flex;
align-items: center;
font-size: 30px;
color: white;
text-shadow: 1px 2px 4px #260202;
height: 60px;

`;


const UserStatus = styled.div`

color: white;
font-Size: 18px;
margin-right: 30px;

`

const LoginButton = styled.span`

cursor: pointer;

`


export function Navbar({login, loggedIn, logout }) {



  return (


    

    <NavbarStyled>
      <Logo>YourBusiness 🍕 

      </Logo>
    
         <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            👤 {loggedIn ? ` ${loggedIn.displayName}` : ""}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>


      </NavbarStyled>

    
      

 
  )
}
