import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Counter = props => {
  return (
    <View>
      <Text style={style.counter}>{props.counter}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  counter: {
    color: '#fff',
    margin: 15,
    fontSize: 14
  }
});

export default Counter;