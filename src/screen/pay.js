import React, { Component } from 'react';
import { Text,Button} from 'react-native-paper';
import {StyleSheet, View, Image} from "react-native";

class pay extends React.Component{

    render(){
        return(
            <View style={{flex:1, backgroundColor: '#40739e'}}>

                <View style={styles.container}>

                    
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>Please Bring The Phone To The Cashiere To Proceed With The Payment{"\n"}</Text>

                    <Text style={{fontSize: 50, color: '#FFF', fontWeight: 'bold', textAlign: 'center'}}>#10 </Text>
                    <Text style={{fontSize: 12, textAlign: 'center', color: '#FFF'}}>Thank You{"\n"}</Text>

                    <Text style={styles.timeTitle}>Time Spent</Text>
                    <Text style={styles.timeTitle}>00:30:10{"\n"}</Text>

                    <Image source={require('../img/thanks.png')} style={{height: 250, width: 200}}/>
                
                </View>

            </View>
        )
    }
}

export default pay


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    timeTitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#FFF'
    }
}
)