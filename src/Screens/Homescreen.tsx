import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Ouaté!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
});
