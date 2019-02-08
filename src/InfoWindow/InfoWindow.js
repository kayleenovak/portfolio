import React, { Component } from 'react'
import { AboutMe } from '../AboutMe/AboutMe.js'
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
        <AboutMe />
        <img src='mountains.svg' className='mountains' />
      </section>
    )
  }
}