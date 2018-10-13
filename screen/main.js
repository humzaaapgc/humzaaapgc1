
import React, {Component} from 'react';
import {Platform, StyleSheet, Button,TouchableOpacity, Text, View} from 'react-native';

export default class main extends Component<> {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('it')}> 
        <Text style={styles.text}> TouchableOpacity </Text> 
      </TouchableOpacity>

      <Button title='SUBMIT' onPress={()=>this.props.navigation.navigate('cs')}/>

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
  text:
  {
          margin:40,

  },

});
