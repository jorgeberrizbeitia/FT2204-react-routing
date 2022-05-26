import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PokemonNav() {

  const [ pokemonList, setPokemonList ] = useState(null)

  // yo se que tengo una API donde traerme los nombres de los pokemons
  // donde deberia hacer yo esta llamada?

  // Ejemplo then/catch directo en el useEffect
  // useEffect(() => {
  //   // aqui hacemos las llamadas de API o Servidores
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((responseJSON) => {
  //     console.log(responseJSON)
  //     setPokemonList(responseJSON.results)
  //   })
  //   .catch(err => console.log(err))
  // }, [])


  // Ejemplo async/await como funcion paralela
  useEffect(() => {
    // componenDidMount
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=600")
      console.log("response de fetch", response)
      const responseJSON = await response.json()
      console.log(responseJSON)
      setPokemonList(responseJSON.results)
    } catch (err) {
      console.log(err)
    }
  }

  if (pokemonList === null) {
    return <h3>...Loading</h3>
  }

  return (
    <div>
    
      <Link to="/">Home</Link>
      {/* <Link to="/poke/pikachu">pikachu</Link>
      <Link to="/poke/bulbasaur">bulbasaur</Link> */}

      {pokemonList.map((eachPoke) => {
        return (
          <li key={eachPoke.name}>
            <Link to={`/poke/${eachPoke.name}`}>{eachPoke.name}</Link>
          </li>
        )
      })}
    
    </div>
  )
}

export default PokemonNav