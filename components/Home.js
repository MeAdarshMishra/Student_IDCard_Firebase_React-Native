import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.homeComponent}>
      <Card style={styles.mainCard}>
        <Text style={styles.text}>Welcome to the Profile Creator App</Text>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonText}>Get Register</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
  },
  mainCard: {
    height: '90%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 60,
  },
  homeButton: {
    backgroundColor: '#2097f3',
    width: 180,
    marginTop: 60,
    marginLeft: 50,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'w600',
  },
});
