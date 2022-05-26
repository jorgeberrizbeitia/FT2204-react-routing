import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import axios from "axios" // libreria que reemplaza a fetch

function PokemonProfile() {

  const [ pokeProfile, setPokeProfile ] = useState(null)

  const { pokename } = useParams()
  console.log(pokename)

  // useEffect(() => {
  //   // componentDidMount
  //   getPokeProfile()
  // }, [])

  const getPokeProfile = async () => {
    setPokeProfile(null) // opcional => se elimina el actual => loading y espera el nuevo
    try {
      // ejemplo FETCH
      // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      // const responseJSON = await response.json()
      // setPokeProfile(responseJSON)
      // console.log(responseJSON)

      // ejemplo AXIOS
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      console.log(response.data) // .data para acceder a la respuesta
      setPokeProfile(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // como componentDidMount Y como componentDidUpdate
    // console.log("pokename ha cambiado", pokename)
    getPokeProfile()
  }, [pokename]) // se ejecuta cada vez que cambia el parametro

  if (pokeProfile === null) {
    return <h3>...Loading</h3>
  }

  return (
    <div>
      <h3>{pokeProfile.name}</h3>
      <p>{pokeProfile.weight}</p>
      <img src={pokeProfile.sprites.front_shiny} alt="" />
    </div>
  )
}

export default PokemonProfile