/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_title}>Tube Pick</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    color: '#282828',
    textAlign: 'center'
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    paddingTop: 40,
  }
});
