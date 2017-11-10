import React, { Component } from 'react';
import HeaderMenu from './header/HeaderMenu';
import PageFooter from './footer/PageFooter';
import ContentContainer from './ContentContainer';
 
const App = () => (
  <div className="container">
    <HeaderMenu />
    	<ContentContainer />
    <PageFooter /> 
  </div>
)

export default App