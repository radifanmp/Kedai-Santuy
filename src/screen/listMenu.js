import React, { Component } from 'react';
import {  Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, StatusBar, View, ScrollView, Image, Text, TouchableOpacity, FlatList  } from "react-native";


class listMenu extends React.Component{

    constructor(props){
        super(props)

            this.state = {
                categori : [
                    {    
                        id: "1",
                        name: "Promo"
                    },

                    {
                        id: "2",
                        name: "Appertize"
                    },

                    {
                        id: "3",
                        name: "Main Course"
                    },

                    {
                        id: "4",
                        name: "Dessert"
                    },

                    {
                        id: "5",
                        name: "Addition"
                    },

                    {
                        id: "6",
                        name: "Drink"
                    },
                ]
            }
    }

    render(){
        return(
            
            <View style={{flex: 1}}>

            <StatusBar  backgroundColor="#487eb0" barStyle="light-content"/>
            <View  style={{backgroundColor: '#40739e', height: 30, flexDirection: 'row', alignItems: 'space-between'}}>
                <Text style={{color: 'white', marginTop:5, marginLeft: 10, fontSize:20}}>{this.props.navigation.getParam('tableNum')}</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 90 , fontSize:20}}>Kedai Santuy</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 80 , fontSize:20}}>12:00</Text>
            </View>

            <View style={{backgroundColor: '#40739e', height: 50, flexDirection: 'row', alignItems: 'space-between'}} >

            {/* //Menu */}
            <FlatList>

            </FlatList>
            {/* <ScrollView horizontal={true}>
            
            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Promo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Appertizer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Main Course</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Dessert</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Addition</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={this._onPressButton}>
            <Text  style={styles.scrollH}>Drink</Text>
            </TouchableOpacity>
            </ScrollView> */}
            

            </View>

            <ScrollView>
             <View style={styles.container}>

             <View style={styles.content}>
             <TouchableOpacity onPress={this._onPressButton}>

            <View style={{alignItems: 'center', marginTop: 15}}>
             <Image source={require('../img/beer.png')}/>
            </View>
            
            <View style={{marginLeft: 10 }}>
             <Text style={{color: '#487eb0', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>Beer</Text>
             <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>5.000.000</Text>
             </View>

             </TouchableOpacity>
             </View>

             <View style={styles.content}>
             <TouchableOpacity onPress={this._onPressButton}>

            <View style={{alignItems: 'center', marginTop: 15}}>
             <Image source={require('../img/beer.png')}/>
            </View>
            
            <View style={{marginLeft: 10 }}>
             <Text style={{color: '#487eb0', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>Beer</Text>
             <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>5.000.000</Text>
             </View>

             </TouchableOpacity>
             </View>

             <View style={styles.content}>
             <TouchableOpacity onPress={this._onPressButton}>

            <View style={{alignItems: 'center', marginTop: 15}}>
             <Image source={require('../img/beer.png')}/>
            </View>
            
            <View style={{marginLeft: 10 }}>
             <Text style={{color: '#487eb0', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>Beer</Text>
             <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>5.000.000</Text>
             </View>

             </TouchableOpacity>
             </View>
            

             </View>
             </ScrollView>
             

            <View  style={{backgroundColor: '#487eb0', height: 140, width: '100%', flexDirection: 'row', alignItems: 'space-between'}}>

            {/* Orderlist */}
            <View style={{backgroundColor: '#FFF', height: 75, width: '92%', borderRadius: 2, position: 'absolute', marginVertical:10, marginLeft: 15}}>
            </View>

            <Button mode="contained" color="#2ecc71" style={styles.button} onPress={() => console.log('Pressed')}><Icon name="checkcircleo" size={18} color="#FFF"></Icon></Button>

            <Button mode="contained" color="#e67e22" style={styles.button} onPress={() => {this.props.navigation.navigate('pay')}}><Icon name="bells" size={18} color="#FFF"></Icon></Button>

            <Button mode="contained" color="#1abc9c" style={styles.button} onPress={() => {this.props.navigation.navigate('viewBill')}}><IconFA name="file-invoice-dollar" size={18} color="#FFF"></IconFA></Button>

            </View>

            </View>
        )
    }
}

export default listMenu


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      width: '100%',
      alignItems: 'center', 
    },

    content: {
        // alignItems: 'center', 
        borderWidth: 1, 
        borderRadius: 4, 
        borderColor: '#487eb0',
        marginVertical: 15,
        width: '75%'
    },

    scrollH: {
        color: 'white', 
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 18,

    },

    button: {
        marginBottom: 30,
        // width: '50%',
        // alignItems: 'center',
        // backgroundColor: 'green',
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 29
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontSize: 10
      },
      
})