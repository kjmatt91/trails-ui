/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './trails.css'

export default ({ id, name, state, town }) => (
    <div className="trail" key={id}>
        {`${name} (${state}) (${town})`}
    </div>
)