import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import db from '../config';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'Register Yourself First',
      email: 'Register Yourself First',
      mobile: 'Register Yourself First',
      address: 'Register Yourself First',
    };
  }

  componentDidMount() {

    const info = db.ref('userData');
    info.on('value', (data) => {
      const userData = data.val();
      const details = [];
      for (var id in userData) {
        details.push({ id, ...userData[id] });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.pic}
            source={require('../assets/adarshmishra.png')}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.items}>
            <Text
              style={{
                flex: 0.75,
                fontSize: 20,
                color: 'orange',
                fontWeight: 'bold',
              }}>
              Name
            </Text>
            <Text style={{ fontSize: 20, color: 'black' }}>
              {this.username}
            </Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                flex: 0.75,
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
              }}>
              E-Mail
            </Text>
            <Text style={{ fontSize: 20, color: 'black' }}>{this.email}</Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                flex: 0.75,
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
              }}>
              Mobile
            </Text>
            <Text style={{ fontSize: 20, color: 'black' }}>{this.mobile}</Text>
          </View>
          <View style={styles.items}>
            <Text
              style={{
                flex: 0.75,
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
              }}>
              Address
            </Text>
            <Text style={{ fontSize: 20, color: 'black' }}>{this.address}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: '1',
  },
  details: {
    flex: 6,
    backgroundColor: 'white',
  },
  pic: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  items: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 0.25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
