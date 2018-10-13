import React, {Component} from 'react';
import {Platform, StyleSheet, Button,TouchableOpacity, Text, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';
export default class cs extends Component<> {

  static navigationOptions={tabBarLabel:'HOME',tabBarIcon:()=>(<Icon name='home' size={20} color='white'/>)} 

  render() {
    return (
      <View style={styles.container}>
     
     <Text>CS</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});