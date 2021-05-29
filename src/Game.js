import React from 'react';
import {
  Text,
  TouchableHighlightBase,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const Row = props => {
  const value = props.id === 0 ? '0' : props.id%2 ? 'X' : '0'
  return (
    <View style={{borderRightWidth: 1, borderBottomWidth:1, width:'33%', backgroundColor:'yellow', height:'10%'}}>
<TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}}onPress={() => props.setValue(props.id,value )} disabled={props.disabled}>
        <Text style={{fontSize:22}}>{props.value}</Text>
        </TouchableOpacity>
    </View>
      
  );
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = {gameBoard: Array(9).fill(null)};
  }

  checkWinner = (value) => {
    let isWinner = false
    if(this.state.gameBoard[6] === value && this.state.gameBoard[4] === value && this.state.gameBoard[2] === value){
      
      isWinner =true
    } else if(this.state.gameBoard[2] === value && this.state.gameBoard[5] === value && this.state.gameBoard[8] === value){
      isWinner =true

    }else if(this.state.gameBoard[0] === value && this.state.gameBoard[4] === value && this.state.gameBoard[8] === value){
      isWinner =true
    }else if(this.state.gameBoard[0] === value && this.state.gameBoard[1] === value && this.state.gameBoard[2] === value){
      isWinner =true
    }else if(this.state.gameBoard[3] === value && this.state.gameBoard[4] === value && this.state.gameBoard[5] === value){
      isWinner =true
    }else if(this.state.gameBoard[6] === value && this.state.gameBoard[7] === value && this.state.gameBoard[8] === value){
      isWinner =true
    }else if(this.state.gameBoard[0] === value && this.state.gameBoard[3] === value && this.state.gameBoard[6] === value){
      isWinner =true
    }else if(this.state.gameBoard[1] === value && this.state.gameBoard[4] === value && this.state.gameBoard[7] === value){
      isWinner =true
    }

    if(isWinner){
      Alert.prompt('Game Over', `Winner is ${value}`, [
        { text: "OK", onPress: () => this.resetBoard()  }
      ]) 
      
    }
    
    
  }

  resetBoard = () => {
    this.setState({gameBoard:Array(9).fill(null)})
  }

  setValue = (index, value) => {
    const array = this.state.gameBoard;
    array[index] = value;
    this.setState({gameBoard: array});
    this.checkWinner(value)
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingHorizontal: '10%',
          paddingVertical: '20%'
        }}>
        <View style={{flex: 1, bordermWidth: 1, padding: 10, flexWrap:'wrap', backgroundColor:'red', flexDirection:'row'}}>
          {
            this.state.gameBoard.map((element, index) => {
              return (
                    <Row id={index} setValue={this.setValue} value={element} disabled={this.state.gameBoard[index]}/>
              )
            })
          }
        </View>
        <TouchableOpacity onPress={this.resetBoard}><Text>Reset</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Game;
