import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput,} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class it extends Component {    
   
 render() {
  const tableHead= ['NAME', 'CELL#', 'ROLL#', 'ADDRESS'];
  const tableData= [
    ['Hamza', '03344616483', '005', 'Lalamusa'],
    ['Saqib', '090078602', '014', 'dilo'],
    ['Habib', '03360052025', '013', 'sehna'],
  ];

   return (
     <View style={styles.container}>
       <Table borderStyle={{borderWidth: 3, borderColor: '#ffdc10'}} >
         <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
         <Rows data={tableData} textStyle={styles.text}/>
       </Table>
     </View>
   )
 }
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

 head: 
 {
    height: 40, 
    backgroundColor: '#a3fdff', 
  },

 text:
  {
     margin: 4,
     fontSize:12,
     color:'#d7194d',
    
  },


});
