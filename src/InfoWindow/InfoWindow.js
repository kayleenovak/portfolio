import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { AboutMe } from '../AboutMe/AboutMe.js'
import { Resume } from '../Resume/Resume.js'
import { Contact } from '../Contact/Contact.js'
import './InfoWindow.css'

export default class InfoWindow extends Component {
  render() {
    return (
      <section className='info-window'>
        <div className='initials-container'>
          <h3 className='initials'>KB</h3>
          <div className='border'></div>
        </div>
        <article className='links'>
          <NavLink to='/resume' className='link-button'>Resume</NavLink>
          <NavLink to='/contact' className='link-button'>Contact</NavLink>
          <NavLink to='/projects' className='link-button'>Projects</NavLink>
        </article>
        <Route exact path='/' component={ AboutMe } />
        <Route path='/resume' component={ Resume } />
        <Route path='/contact' component={ Contact } />
        <Route path='/projects' component={ Projects } />
        <img src='mountains.svg' className='mountains' />
      </section>
    )
  }
}