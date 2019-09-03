import React, { Component } from 'react';
import { Text,Button} from 'react-native-paper';
import {StyleSheet, StatusBar, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'


import {addtransaction} from '../_actions/transaction'



class setTable extends React.Component{

    state = {
        textNumbertbl: ""
    }

    actionText = (text) => {
        this.setState({
            textNumbertbl: text
        })
    }

    actionSub = async () => {
        await AsyncStorage.setItem('tableNumber', `${this.state.textNumbertbl}`)

        await this.props.dispatch(addtransaction({
            tableNumber: this.state.textNumbertbl,
            isPaid:false
        }))
        await AsyncStorage.setItem('transactionId', `${this.props.transaction.dataItem.data.id}`)
        await this.props.navigation.navigate('billPriv')
        console.log(this.state.textNumbertbl)
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

            <TextInput style={styles.input} placeholderTextColor="rgba(255,255,255,0.9)" keyboardType='number-pad' onChangeText={this.actionText}></TextInput>

            <Button style={styles.button} onPress={this.actionSub}><Text style={{color: '#487eb0', fontSize: 15}}>Submit</Text></Button>

            </View>

            </View>

            {/* </View> */}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    }
}


export default connect(mapStateToProps)(setTable)



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