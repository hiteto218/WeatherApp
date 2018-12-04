/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';

import Header from './src/component/Header';
import Weather from './src/component/Weather';

type Props = {};

const baseRequest = axios.create({
  baseURL: 'http://weather.livedoor.com/forecast/webservice/json/',
  responseType: 'json',
})


export default class App extends Component<Props> {

  state = {
    information: [],
  }

  onEndEditing(text) {
    baseRequest
      .get('v1', {params: {city: text} })
      .then( res => {
        this.setState({information: res.data})
      })
      .catch( error => {
        console.log(error.response);
      });
    this.setState({inputText: text})
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="検索"
            style={styles.textInput}
            onEndEditing={ e => this.onEndEditing(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.weatherContainer}>
          <Weather information={this.state.information}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#1e90ff'
  },
  inputContainer: {
    padding: 10,
    paddingBottom: 5,
    backgroundColor: '#f1f2f6'
  },
  textInput: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1
  },
  weatherContainer: {
    backgroundColor: '#f1f2f6',
    padding: 10,
    paddingBottom: 0
  }
});
