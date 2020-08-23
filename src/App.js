import React from 'react';
import {StylesProvider } from '@material-ui/styles' 
import { CssBaseline }  from '@material-ui/core' 
import GlobalStyle from './commons/styles/global-styles' 
import Main from './containers/index.jsx'
function App() {
  return (
    <div className="App"> 
    
    <StylesProvider injectFirst>
      <CssBaseline/> 
      <GlobalStyle/> 
      <Main />
      </StylesProvider> 
    
      
    </div>
  );
}

export default App;
