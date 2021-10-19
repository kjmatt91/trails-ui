/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trailspage.css";
import GoBack from "../../components/goback/goback";
import StatesDetails from "../../components/statesinfo/statesinfo";
import NotFound from "../../components/error/error";
import Trails from "../../components/trails/trails";
import Title from "../../components/title/title";

export default (props) => {
  const [states, setStates] = useState({});
  const [trailsList, setTrailsList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const { statesId } = props.match.params;

  useEffect(() => {
    pullData(statesId);
  }, []);

  const retrieveStates = async (incomingId) => {
    if (!Number(incomingId)) return { id: 0, details: {}, trails: [] };

    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/states/${incomingId}`
      )

      const { id, name, trails } = data;

      return { id, trails, details: { id, name } };
    } catch (error) {
      return { id: 0, details: {}, trails: [] };
    }
  };

  const pullData = async (incomingId) => {
    try {
      const { id, details, trails } = await retrieveStates(incomingId);
      if (id === 0) setError("No State found with this ID");
      setStates(details);
      setTrailsList(trails);
      setIsLoading(false)
    } catch (error) {
      setError("No trail found with this ID!");
      setIsLoading(false)
    }
  };

  if(isLoading) return <div className="loader">Loading...</div>

  return (
    <div className="trails">
      <Title />
      <GoBack />
      {!error ? (
        <div>
          <StatesDetails
            name={states.name}
          />
          {trailsList.map((trails) => (
            <Trails
              key={trails.id}
              id={trails.id}
              name={trails.name}
              state={trails.state}
              town={trails.town}
            />
          ))}
        </div>
      ) : (
        <NotFound message={error} />
      )}
    </div>
  );
};
