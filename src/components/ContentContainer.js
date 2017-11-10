import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';  

const MainPage = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default MainPage
 