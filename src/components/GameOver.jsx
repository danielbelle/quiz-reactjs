import React, { useContext } from 'react'
import './GameOver.css'
import WellDone from '../img/welldone.svg'
import { QuizContext } from '../context/quiz'

function GameOver() {

  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
      <img src={WellDone} alt='Fim do Quiz'></img>
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GameOver