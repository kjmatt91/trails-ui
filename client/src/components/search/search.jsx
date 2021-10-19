/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './search.css'

export default ({ term, setter }) => (
  <input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)