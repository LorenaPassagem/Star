import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import {Star, WrapStar } from './components/Star';

function App() {
  return (
  <WrapStar>  
    <Star />
    <Star />
    <Star />
    <GlobalStyle />
  </ WrapStar>
    
  );
}

export default App;
