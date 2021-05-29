import React, {useReducer, useState} from 'react';
import PlayGame from './PlayGame'
import GameBoard from './GameBoard'


const Game = () => {
  const [playGame, setPlaygame] = useState(false)
  return(
    playGame ? <GameBoard /> : <PlayGame setPlaygame={setPlaygame}/>
  )
  
}

export default Game;
