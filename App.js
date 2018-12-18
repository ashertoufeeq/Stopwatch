import React,{Component} from 'react';
import { AppRegistry,StyleSheet, Text, View,TouchableOpacity } from 'react-native';



export default class App extends React.Component {

constructor(props){
  super(props);
  this.state={
    text:"Start",
    count:0,
  
  }
  console.log("okay")
}
click=()=>{this.state.count>2?this.state.count=0:null
  return this.state.count==0?text="Start":this.state.count==1?text="Pause":this.state.count==2?text="Reset":null
}

onPress = () => {
  this.setState({
    count: this.state.count+1,
    }
  
  )
console.log("Ggg")}

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.onPress}
       >
        <View style={styles.mainarea}>
          <View style={styles.circle}>
          
          
          <Text style={styles.circleText}>00:00</Text></View>
         
        <Text style={styles.Tap}>
           { this.click()}    
          </Text>
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
