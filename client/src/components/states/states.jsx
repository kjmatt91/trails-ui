/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";
import "./states.css";

export default ({ id, name }) => (
  <div className="states" key={id}>
    <NavLink to={`/trails/${id}`}>{`${name}`}</NavLink>
  </div>
);
