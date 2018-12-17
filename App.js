import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
/*
constructor(props){
  super(props);
  this.state={
    text:"Start",
    count=1,

  }
}*/


  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.setState}>
        <View style={styles.mainarea}>
          <View style={styles.circle}>
          <Text style={styles.circleText}>00:00</Text></View>
         
          <Text style={styles.Tap}>Click to Start</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 10,
  },
  mainarea:
  {alignItems:"center",
  justifyContent:"center",
  
   },
  
  circle:{
    alignItems: 'center',
    justifyContent: 'center',
backgroundColor:'#4246',
   height:200,
   width:200,
borderWidth:1,
borderColor:"#fff",
borderRadius:100   
  },
  circleText:{
    fontSize:30,
    color: "#fff",
    fontWeight:"bold",

  },
  Tap:{paddingTop:10,
color:"#fff",
fontSize:15,
fontWeight:"bold"
  }
});
