/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import States from '../../components/states/states'
import Search from '../../components/search/search'
import Title from '../../components/title/title'
import './statespage.css'

export default () => {
  const [statesList, setStatesList] = useState([])
  const [filteredStatesList, setFilteredStatesList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchStates()
  }, []) 

  const fetchStates = async () => {
    let {data} = await axios.get('http://localhost:8080/api/states')
    setStatesList(data)
    setFilteredStatesList(data)
  }

  useEffect(() => {
    const filtered = filterStates(statesList, searchTerm)

    setFilteredStatesList(filtered)
  }, [searchTerm])

  const filterStates = (list, term) => list.filter(state => (
    state.name.toLowerCase().includes(term.toLowerCase())
  ))

  return (
    <div className="states">
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredStatesList.map(state => (
          <States
            key={state.id}
            id={state.id}
            name={state.name}
          />
        ))
      }
    </div>
  )
}