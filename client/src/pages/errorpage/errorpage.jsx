/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import NotFound from '../../components/error/error'
import Title from '../../components/title/title'
import './errorpage.css'

export default () => (
  <div className="error">
    <Title />
    <NotFound message="Sorry, unable to find the page you are looking for" />
  </div>
)