import React from 'react';

import { createGlobalStyle } from 'styled-components'

import{ Navbar } from "./Navbar/Navbar"

const GlobalStyle = createGlobalStyle`
  body {
   
    font-family: 'Fira Sans', sans-serif;

    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
  }
`

function App() {
  return (

    <>

    
    <GlobalStyle/>
    <Navbar/>
    <div>Helllooooo</div>

    </>

  );
}

export default App;
