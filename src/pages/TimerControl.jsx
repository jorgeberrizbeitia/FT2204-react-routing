import React, { useState } from 'react'
import Timer from '../components/Timer'

function TimerControl() {

  const [ showTimer, setShowTimer ] = useState(false)

  const handleClick = () => {
    setShowTimer(!showTimer)
  }

  return (
    <div>
    
      <h3>Controlador</h3>

      <button onClick={handleClick}>Mostrar Timer</button>

      { showTimer === true && <Timer setShowTimer={setShowTimer}/> }
    
    </div>
  )
}

export default TimerControl