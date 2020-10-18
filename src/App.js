import React from 'react';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
   
    font-family: 'Fira Sans', sans-serif;


  }

  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
  }
`

function App() {
  return (

    <>
   <h1>PizzaParty</h1>
    <GlobalStyle/>
    <div>Helllooooo</div>

    </>

  );
}

export default App;
