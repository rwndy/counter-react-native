import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import Counter from './components/Counter'

export default class App extends Component {
  state = { counter: 0 }

  _handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  _handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Counter</Text>
        <Button
          style={styles.button}
          onPress={this._handleIncrement}
          title="Increment +"
        />
        <Counter counter={this.state.counter} />
        <Button
          style={styles.button}
          onPress={this._handleDecrement}
          title="Decrement -"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1c40f'
    
  },
  button: {
    padding: 50,
    color: '#841584',
    borderRadius: 50
  },

  text: {
    marginBottom: 20,
    color: '#fff',
    textTransform: 'uppercase'
  }
})