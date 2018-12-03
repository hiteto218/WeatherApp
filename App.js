/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Tube Pick</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#e74c3c'
  },
  header_title: {
    fontSize: 24,
    color: '#282828',
    textAlign: 'center',
    fontWeight: '600'
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#e74c3c'
  }
});
