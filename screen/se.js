import React, {Component} from 'react';
import {Platform, StyleSheet, Button,TouchableOpacity, Text, View} from 'react-native';

export default class se extends Component<> {

static navigationOptions={tabBarLabel:'MAIN'}

  render() {
    return (
      <View style={styles.container}>
     
     <Text>SE</Text>

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