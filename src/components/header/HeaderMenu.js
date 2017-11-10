import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const HeaderMenu = () => (
  <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutme'>About me</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">React project demo</h3>
      </div>
)

export default HeaderMenu
 