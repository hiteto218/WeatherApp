import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

export default class DayComonent extends Component<Props> {
  render() {
    const { date, dateLabel, telop, temperature, image } = this.props.weather
    return (
      <View style={styles.dayComonent}>
        <Text style={styles.date}>{`${date} (${dateLabel})`}</Text>
        <Image style={styles.image} source={{uri: image.url}} />
        <Text style={styles.day_weather}>{telop}</Text>
        <View style={styles.dayTemperature}>
          <Text style={styles.dayTemperatureHigh}>
            { temperature.max? `${temperature.max.celsius}℃` : `-℃` }
          </Text>
          <Text style={styles.dayTemperatureLow}>
            { temperature.min? `${temperature.min.celsius}℃` : `-℃` }
          </Text>
        </View>
      </View>
    );
  }
}


const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 2) / 3);
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
  dayComonent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  date: {
    fontSize: 12,
    paddingBottom: 5,
  },
  day_weather: {
    fontWeight: '600',
    paddingTop: 5,
    fontSize: 20,
  },
  image: {
    width: imageWidth * 0.3,
    height: imageHeight * 0.3,
    borderRadius: 30,
  },
  dayTemperature: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  dayTemperatureHigh: {
    fontSize: 16,
    color: '#eb4d4b',
    marginRight: 10,
  },
  dayTemperatureLow: {
    fontSize: 16,
    color: '#3498db'
  }
});
