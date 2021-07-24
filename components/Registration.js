import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import db from '../config';

export default function Registration({navigation}) {

  const [user, setUser] = useState({
      userDetails: [{name:"", mail:"", mob:"", add:""}],
      username: '',
      email: '',
      mobile: '',
      address: '',
    });

  const addUser = () => {
    const info = db.ref('userData');
    if (user.username && user.email && user.mobile && user.address) {
      const user = {
        name:user.username,
        mail:user.email,
        mob:user.mobile,
        add:user.address
      };
      info.push(user);
      console.log(user);
      setUser({ username: '' , email: '' , mobile: '' , address: '' });
    }
  };

  return (
    <View style={styles.registerComponent}>
      <Input
        placeholder="Enter Name"
        leftIcon={{ type: 'ant-design', name: 'user' }}
        onChangeText={(text) => {setUser({username:text})
        }}
        value={user.username}
      />
      <Input
        placeholder="Enter Email-ID"
        leftIcon={{ type: 'ant-design', name: 'mail' }}
        onChangeText={(text) => {
          setUser({email:text})
        }}
        value={user.email}
      />
      <Input
        placeholder="Enter Mobile"
        leftIcon={{ type: 'ant-design', name: 'mobile1' }}
        onChangeText={(text) => {
          setUser({mobile:text})
        }}
        value={user.mobile}
      />
      <Input
        placeholder="Enter City Name"
        leftIcon={{ type: 'entypo', name: 'location-pin' }}
        onChangeText={(text) => {
          setUser({address:text})
        }}
        value={user.address}
      />
      <TouchableOpacity style={styles.registerButton} onPress={this.addUser}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Check Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registerComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  registerButton: {
    width: 100,
    marginTop: 20,
    backgroundColor:"#2097f3",
    textAlign:"center",
    padding:15,
    borderRadius:5
  },
  profileButton: {
    width: 180,
    marginTop: 30,
    backgroundColor:"#2097f3",
    textAlign:"center",
    padding:15,
    borderRadius:5
  },
  buttonText:{
    color:"white",
    fontSize:15,
  }
});
