import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const PlayGame = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={props.setPlaygame}>
        <Text style={{fontSize: 28}}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayGame;
