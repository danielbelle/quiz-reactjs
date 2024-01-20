import React, { useContext, useReducer } from 'react'
import { QuizContext } from '../context/quiz'
import Quiz from '../img/quiz.svg'
import './Welcome.css'

function Welcome() {

  const [QuizState, dispatch] = useContext(QuizContext);

  return (

    <div id='welcome' >
      <h2>Seja Bem-Vindo</h2>
      <p>Clique no botão para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt='início do quiz'></img>
    </div>
  )
}

export default Welcome