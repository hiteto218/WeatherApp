import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_title}>お天気アプリ</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600'
  },
  header: {
    justifyContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 0.2
  }
});
