import React, {Component} from "react"
import{
  View,
  StyleSheet, 
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/bg.jpg')} style={styles.backgroundImage}>
          <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
          
          <Text style={styles.textView}>A sample login page</Text>

          <TextInput style={styles.inputView} placeholder="Username" maxLength={10}>

          </TextInput>

          <TextInput style={styles.inputView} placeholder="Password" maxLength={16}
                    secureTextEntry={true}>

          </TextInput>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.logText}>Sign In</Text>
          </TouchableHighlight>


        </ImageBackground>

      </View>
    )
  }
}


const styles =  StyleSheet.create(
  {
    container:{
      height: '100%',
      width: '100%',
      backgroundColor: 'black'
    },

    backgroundImage:{
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo:{
      height: 80,
      width: 80,
      borderRadius: 30
    },

    textView: {
      fontWeight: 'bold',
      color: 'black',
      marginTop: 5,
      fontSize: 15,
     
    },

    inputView:{
      width : '80%',
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#5f79c9',
      paddingLeft: 20,
      marginTop: 20
    },

    button:{
      borderWidth: 1,
      width: '50%',
      height: 30,
      marginTop: 10,
      borderRadius: 30,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#478af5' 
    },

    logText:{
      color: 'white',
      fontWeight: 'bold'
    }
  }
) 