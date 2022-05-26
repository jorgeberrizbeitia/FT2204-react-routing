import React, { useState } from 'react'
import { useEffect } from "react"

function Timer(props) {

  const [ count, setCount ] = useState(0)
  const { setShowTimer } = props

  useEffect(() => {
    // componentDidMount
    console.log("el timer existe! Hola :)")
    // se inicia el timer

    const intervalId = setInterval(() => {
      // setCount acepta el valor que tendra el estado
      // opcionalmente acepta una funcion que retorna el nuevo valor
      setCount((currentValue) => {
        console.log("ha pasado 1 segundo", currentValue) 
        return currentValue + 1
      })

    }, 1000)

    return () => {
      // componentWillUnmount
      console.log("Se termino el timer! :(")
      clearInterval(intervalId)
    }

  }, []) // [] define que esta funcion solo se ejecuta una vez (al inicio del ciclo de vida del comp)

  useEffect(() => {
    console.log("cambios en el estado: count")
    // cuando el timer llegue a 5, entonces desaparezca
    if (count >= 5) {
      // ... desaparece ???
      setShowTimer(false)
    }
  }, [count]) // dependencias


  return (
    <div>
    
      <h4>Timer</h4>
      <h5>{count}</h5>

    </div>
  )
}

export default Timer



let state = ""
let setState = (parametro) => {

  if (parametro !== typeof "function") {
    state = parametro
  }
  if (parametro === typeof "function" ) {
    state = parametro(state)
  }

}

setState((estadoActual => {
  return estadoActual + "Hola"
}))

setState("Hola")