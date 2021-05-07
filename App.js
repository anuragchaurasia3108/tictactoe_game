import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {Button, Item} from "native-base";


var itemArray = new Array(9).fill("empty");
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      iscross:false,
      winmessage:"",
      winmessagess:"",
    }
  }
  drawIntem = (itemNumber) => {
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = this.state.iscross;
      this.setState({ iscross:!itemArray[itemNumber] },() => {});
    }
    this.Wingame();
  };

  chooseIntemIcon = (itemNumber) => {
    if(itemArray[itemNumber]!=="empty"){
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
   
  };
  ChooseIntemcolor = (itemNumber) => {
    if(itemArray[itemNumber]!=="empty"){
      return itemArray[itemNumber] ? "red" : "blue";
    }
    return 'black';
   
  };
  ResetGame = () => {
    itemArray.fill("empty");
    this.setState({winmessage : ''})
    this.forceUpdate();
   
  };

  Wingame = () => {
    if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[1]) && (itemArray[1]==itemArray[2])){
      this.setState({winmessage : (itemArray[0] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[3]!=="empty") && (itemArray[3]==itemArray[4]) && (itemArray[4]==itemArray[5])){
      this.setState({winmessage : (itemArray[3] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[6]!=="empty") && (itemArray[6]==itemArray[7]) && (itemArray[7]==itemArray[8])){
      this.setState({winmessage : (itemArray[6] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[3]) && (itemArray[3]==itemArray[6])){
      this.setState({winmessage : (itemArray[0] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[1]!=="empty") && (itemArray[1]==itemArray[4]) && (itemArray[4]==itemArray[7])){
      this.setState({winmessage : (itemArray[1] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[2]!=="empty") && (itemArray[2]==itemArray[5]) && (itemArray[5]==itemArray[8])){
      this.setState({winmessage : (itemArray[2] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[4]) && (itemArray[4]==itemArray[8])){
      this.setState({winmessage : (itemArray[0] ? "Cross" : "Circle").concat(" Win")})
    }
    else if((itemArray[2]!=="empty") && (itemArray[2]==itemArray[4]) && (itemArray[4]==itemArray[6])){
      this.setState({winmessage : (itemArray[2] ? "Cross" : "Circle").concat(" Win")})
    }
    
  };
  Wingames = () => {
    if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[1]) && (itemArray[1]==itemArray[2])){
      return( (itemArray[0] ? "cross" : "circle"));
    }
    else if((itemArray[3]!=="empty") && (itemArray[3]==itemArray[4]) && (itemArray[4]==itemArray[5])){
      return( (itemArray[3] ? "cross" : "circle"));
    }
    else if((itemArray[6]!=="empty") && (itemArray[6]==itemArray[7]) && (itemArray[7]==itemArray[8])){
      return( (itemArray[6] ? "cross" : "circle"))
    }
    else if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[3]) && (itemArray[3]==itemArray[6])){
      return((itemArray[0] ? "cross" : "circle"))
    }
    else if((itemArray[1]!=="empty") && (itemArray[1]==itemArray[4]) && (itemArray[4]==itemArray[7])){
      return((itemArray[1] ? "cross" : "circle"))
    }
    else if((itemArray[2]!=="empty") && (itemArray[2]==itemArray[5]) && (itemArray[5]==itemArray[8])){
      return( (itemArray[2] ? "cross" : "circle"))
    }
    else if((itemArray[0]!=="empty") && (itemArray[0]==itemArray[4]) && (itemArray[4]==itemArray[8])){
      return( (itemArray[0] ? "cross" : "circle"))
    }
    else if((itemArray[2]!=="empty") && (itemArray[2]==itemArray[4]) && (itemArray[4]==itemArray[6])){
      return((itemArray[2] ? "cross" : "circle"))
    }
  };
 

   
  
  render() {
    return (
      <View style ={styles.container}>
      
        <View style = {styles.topstyle}>
        <Text style={styles.toptext}>welcome to tic tac toe</Text>
        </View>
  
        <View style = {styles.grid}>
          <View style={styles.row}>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(0)}>
              <Entypo
                name ={this.chooseIntemIcon(0)}
                size ={60}
                color={this.ChooseIntemcolor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(1)}>
              <Entypo
                name ={this.chooseIntemIcon(1)}
                size ={60}
                color={this.ChooseIntemcolor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(2)}>
              <Entypo
                name ={this.chooseIntemIcon(2)}
                size ={60}
                color={this.ChooseIntemcolor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(3)}>
              <Entypo
                name ={this.chooseIntemIcon(3)}
                size ={60}
                color={this.ChooseIntemcolor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(4)}>
              <Entypo
                name ={this.chooseIntemIcon(4)}
                size ={60}
                color={this.ChooseIntemcolor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(5)}>
              <Entypo
                name ={this.chooseIntemIcon(5)}
                size ={60}
                color={this.ChooseIntemcolor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(6)}>
              <Entypo
                name ={this.chooseIntemIcon(6)}
                size ={60}
                color={this.ChooseIntemcolor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(7)}>
              <Entypo
                name ={this.chooseIntemIcon(7)}
                size ={60}
                color={this.ChooseIntemcolor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style ={styles.Item}>
              <TouchableOpacity onPress = { () => this.drawIntem(8)}>
              <Entypo
                name ={this.chooseIntemIcon(8)}
                size ={60}
                color={this.ChooseIntemcolor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          
        </View>
        <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style = {styles.WWinmessage}>{this.state.winmessage}
        </Text>
        <Entypo
                
                name ={this.Wingames()}
                size ={50}
                color={"#50DBB4"}
                />
      
       
        </View>
        
        <TouchableOpacity style={styles.Button}
        onPress ={ () => this.ResetGame() }
        >
          <Text style = {styles.textbutton}>Reset Game</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#5DA3FA",
    alignItems:"center",
    justifyContent:"center",
  },
  grid: {

  },
  row :{
    flexDirection : 'row'

  },
  Item :{
    borderWidth :2,
    borderColor: "#000",
    padding:30,
    borderRadius:10,

  },
  WWinmessage :{
  
    padding :20,
    fontSize:35,
    fontWeight:"bold",
    color:"#CAD5E2",
    
    
    
    
    
  },
  textbutton:{
    color:"#2827CC",
    fontWeight:"bold",
    textShadowRadius:100,
    textShadowColor:"red",
    fontSize:15

    
    

  },
  Button:{
    borderWidth:1,
    padding:5,
    height:35,
    width:350,
    borderColor:"blue",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"orange"
    

  },
  toptext:{
    fontSize:20,
    color:"#6A1B4D",
  },
  topstyle:{
    borderWidth:2,
    borderRadius:20,
    width:Dimensions.get("window").width,
    alignItems:"center",
    marginBottom:10,
    backgroundColor:"#CAD5E2",
    borderColor:"#38CC77"
    
  }
  
})
