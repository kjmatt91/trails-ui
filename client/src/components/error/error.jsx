/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './error.css'

export default ({ message }) => (
  <>
    <div className="icon">¯\_(ツ)_/¯</div>
    <div className="message">{message}</div>
  </>
)