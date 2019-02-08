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
          <button className='link-button'>Resume</button>
          <button className='link-button'>Projects</button>
          <button className='link-button'>Contact</button>
        </article>
        <Route exact path='/' component={ AboutMe } />
        <Route path='/resume' component={ Resume } />
        <Route path='/contact' component={ Contact } />
        <img src='mountains.svg' className='mountains' />
      </section>
    )
  }
}