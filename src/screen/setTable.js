import React, { Component } from 'react';
import { Text,Button} from 'react-native-paper';
import {StyleSheet, StatusBar, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

class setTable extends React.Component{

    constructor()
	  {
	      super()
	      this.state = {
	          table:'',
	      }
	  }

    render(){
        return(
            <ScrollView backgroundColor="#40739e">
            <StatusBar backgroundColor="#487eb0" barStyle="light-content"/>

            {/* <View style={{marginVertical: '50%'}}> */}


            <View style={styles.container}>

            <View style={styles.content}>
            <Image source={require('../img/icon.png')} style={{width: 250, height: 250, justifyContent: 'center', alignItems: 'center', flex:1}}/>
            
            <Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Masukan Nomer Meja</Text>

            <TextInput style={styles.input} placeholderTextColor="rgba(255,255,255,0.9)" keyboardType='number-pad' onChangeText={(text) => {this.setState({table:text})}}></TextInput>

            <Button style={styles.button} onPress={() => {this.props.navigation.navigate('listMenu')}}><Text style={{color: '#487eb0', fontSize: 15}}>Submit</Text></Button>

            </View>

            </View>

            {/* </View> */}
            </ScrollView>
        )
    }
}

export default setTable



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },

    content: {
        alignItems: 'center', 
        // borderWidth: 0.5, 
        borderRadius: 4, 
        borderColor: '#FFF',
        marginVertical: 90,
    },

    input: {
        marginTop: 15,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 15,
        color: '#FFFFFF',
        width: '90%',
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 20
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 40,
        width: '70%',
        marginBottom: 15,
    },
})