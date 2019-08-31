import React, { Component } from 'react';
import { } from 'react-native-paper';
import {StyleSheet, StatusBar, View, ScrollView, Image, Text, Button, TouchableOpacity  } from "react-native";


class setTable extends React.Component{

    render(){
        return(
            <ScrollView>
             
            
            <StatusBar  backgroundColor="#487eb0" barStyle="light-content"/>
            <View  style={{backgroundColor: '#40739e', height: 30, flexDirection: 'row', alignItems: 'space-between'}}>
                <Text style={{color: 'white', marginTop:5, marginLeft: 10, fontSize:20}}>#10</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 90 , fontSize:20}}>Kedai Santuy</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 80 , fontSize:20}}>12:00</Text>
            </View>

            <View style={{backgroundColor: '#40739e', height: 50, flexDirection: 'row', alignItems: 'space-between'}} >

            {/* //Menu */}
            <ScrollView horizontal={true}>
            
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
            </ScrollView>
            

            </View>

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

             <View  style={{backgroundColor: '#487eb0', height: 100, flexDirection: 'row', alignItems: 'space-between'}}>

             {/* Orderlist */}
                <View style={{backgroundColor: '#FFF', height: 75, width: '45%', borderRadius: 2, position: 'absolute', marginVertical:10, marginLeft: 15}}>
                </View>

                <View style={{marginLeft:'55%', marginVertical: '14%', border}}><Text style={{color: 'white'}}>Konfirmasi</Text></View>

            </View>
             
             </ScrollView>
        )
    }
}

export default setTable


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

    }
})