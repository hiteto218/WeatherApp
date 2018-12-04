import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import DayComonent from '../modules/DayComonent';

export default class Weather extends Component<Props> {
  render() {
    const information = this.props.information
    const title = this.props.information.title
    const weatherInformation = this.props.information.forecasts

    function InformationExit() {
      if (information.length != 0) {
        return(
          <View style={styles.weather}>
            <Text style={styles.weatherTitle}>{title}</Text>
            <View style={styles.dayWeather}>
              <DayComonent weather={weatherInformation[0]} />
              <DayComonent weather={weatherInformation[1]} />
            </View>
          </View>
        )
      } else {
        return(
          <View></View>
        )
      }
    }


    return (
      <InformationExit />
    );
  }
}

const styles = StyleSheet.create({
  weather: {
    backgroundColor: '#fff',
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  weatherTitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  dayWeather: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
