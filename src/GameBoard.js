import React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import RnToast from 'rn-js-toast';

const Row = props => {
  const borderRightWidth =
    props.id === 2 || props.id === 5 || props.id === 8 ? 0 : 1;
  const borderBottomWidth =
    props.id === 6 || props.id === 7 || props.id === 8 ? 0 : 1;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        borderRightWidth: borderRightWidth,
        borderBottomWidth: borderBottomWidth,
        width: '33%',
        paddingVertical: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => props.setValue(props.id)}
      disabled={props.disabled}>
      <Text style={{fontSize: 22}}>{props.value}</Text>
    </TouchableOpacity>
  );
};

class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {gameBoard: Array(9).fill(null), previousTurn: 'X'};
    this.toastRef = null;
  }

  checkWinner = value => {
    let isWinner = false;
    if (
      this.state.gameBoard[6] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[2] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[2] === value &&
      this.state.gameBoard[5] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[1] === value &&
      this.state.gameBoard[2] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[3] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[5] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[6] === value &&
      this.state.gameBoard[7] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[3] === value &&
      this.state.gameBoard[6] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[1] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[7] === value
    ) {
      isWinner = true;
    }
    if (isWinner) {
      this.toastRef.show(`Winner is ${value}`, 1000);
      this.resetBoard();
    }
  };

  resetBoard = () => {
    this.setState({gameBoard: Array(9).fill(null), previousTurn: 'X'});
  };

  setValue = index => {
    const value = this.state.previousTurn === 'X' ? '0' : 'X';
    const array = this.state.gameBoard;
    array[index] = value;
    this.setState({gameBoard: array, previousTurn: value}, () => {
      this.checkWinner(value);
    });
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingHorizontal: '10%',
          paddingVertical: '20%',
        }}>
        <Text style={{fontSize: 22}}>{`Turn: ${
          this.state.previousTurn === 'X' ? '0' : 'X'
        }`}</Text>
        <View
          style={{
            flex: 1,
            bordermWidth: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 10}}>
            {this.state.gameBoard.map((element, index) => {
              return (
                <Row
                  key={index}
                  id={index}
                  setValue={this.setValue}
                  value={element}
                  disabled={this.state.gameBoard[index]}
                />
              );
            })}
          </View>
        </View>
        <TouchableOpacity onPress={this.resetBoard}>
          <Text style={{fontSize: 22}}>Reset</Text>
        </TouchableOpacity>
        <RnToast ref={toast => (this.toastRef = toast)} />
      </View>
    );
  }
}

export default GameBoard;
