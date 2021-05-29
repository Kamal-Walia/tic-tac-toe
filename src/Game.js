import React, { useState } from 'react';
import { View } from 'react-native';
import PlayGame from './PlayGame'
import GameBoard from './GameBoard'


const Game = () => {
  const [playGame, setPlaygame] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {playGame ? <GameBoard /> : <PlayGame setPlaygame={setPlaygame} />}
    </View>
  )

}

export default Game;
