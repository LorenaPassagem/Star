import React, {useState, useEffect} from 'react';
import GlobalStyle from './components/GlobalStyle';
import Star from './components/Star';

function App({amount}) {
 return (
  <> 
     <Star />
    <GlobalStyle />
  </>    
  );
}

export default App;
