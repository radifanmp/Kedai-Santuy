import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {  Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, StatusBar, View, ScrollView, Image, Text, TouchableOpacity, FlatList, Alert} from "react-native";


import { getCategori } from '../_actions/categori'
import { getMenu, getMenuWhereCategori } from '../_actions/menu'
import restApi, { convertToRupiah } from '../assets/restApi'


class listMenu extends React.Component{
    state = {
        tableNumber: 0,
        transactionId: 0,
        initNameCategori: 'All',
        startMenus: [],
        order: [],
        toogleStarted: ''
    }

    //Get Number table
    gettableNumber = async () => {
        try{
            const tableNumber = await AsyncStorage.getItem('tableNumber')
            const transactionId = await AsyncStorage.getItem('transactionId')
            await this.setState({
            tableNumber: tableNumber,
            transactionId: transactionId
            })  
        } catch (error) {
            console.log(error)
        }
    }

    //Hapus Data Meja
    cleartableNumber = async () => {
        try {
          await AsyncStorage.clear();
          await this.props.navigation.navigate('billPub')
        } catch (error) {
        }
      }

      actionCategori = (categoriId, categoriName) => {
        this.props.dispatch(getMenuWhereCategori(categoriId))
        this.setState({
          initNameCategori: categoriName
        // alert('Test')
        })
      }

      cekMenu = async () => {
        const startMenus = await AsyncStorage.getItem('startMenus')
        await this.setState({
            startMenus
        });
      }

      componentDidMount() {
        this.gettableNumber()
        this.props.dispatch(getMenu())
        this.props.dispatch(getCategori())
        // this.cekMenu()
      }

      sendMenu = (value)=> {
          alert(value)
          this.setState({
              order : [...this.state.order,...value]
          })
      }

      confirm() {
        Alert.alert(
            'Confirmasi Pesanan',
            'Apakah Anda Yakin Dengan Pesanan  Anda',
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () => {this.props.navigation.navigate('viewBill')}},
            ],
            {cancelable: false},
            );
      }

    render(){
        return(
            
            <View style={{flex: 1}}>

            <StatusBar  backgroundColor="#487eb0" barStyle="light-content"/>
            <View  style={{backgroundColor: '#40739e', height: 30, flexDirection: 'row', alignItems: 'space-between'}}>
                <Text style={{color: 'white', marginTop:5, marginLeft: 10, fontSize:20}}>#{this.state.tableNumber}</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 90 , fontSize:20}}>Kedai Santuy</Text>
                <Text style={{color: 'white', marginTop:5, marginLeft: 80 , fontSize:20}}>20:38</Text>
            </View>

            <View style={{backgroundColor: '#40739e', height: 50, flexDirection: 'row', alignItems: 'space-between'}} >

            {/* //Menu */}
            <FlatList
              horizontal={true}
              data={this.props.categori.dataItem}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.actionCategori(item.id, item.name)} >
                  <Text  style={styles.scrollH}>{item.name}</Text>
                </TouchableOpacity>
                  )}
            />

            </View>


            {/* <ScrollView> */}
             <View style={styles.container}>


             {/* {this.props.menu.isLoading ?
              <ActivityIndicator></ActivityIndicator>
              : */}
                <FlatList
                style={{width: '100%'}}
                data = {this.props.menu.dataItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert('This Is '+item.name)}>   
                <View style={styles.content}>
                <View style={{alignItems: 'center', marginTop: 15}}>
                <Image source={{uri: item.image}} style={{ width: '100%', height: 250}}/>
                </View>
                
                <View style={{marginLeft: 10 }}>
                <Text style={{color: '#487eb0', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>{convertToRupiah(item.price)}</Text>
                </View>
                </View>
                </TouchableOpacity>
                )}
                />
            {/* } */}

             </View>
             {/* </ScrollView> */}
             

            <View  style={{backgroundColor: '#487eb0', height: 140, width: '100%', flexDirection: 'row', alignItems: 'space-between'}}>

            {/* Orderlist */}
            <View style={{backgroundColor: '#FFF', height: 75, width: '92%', borderRadius: 2, position: 'absolute', marginVertical:10, marginLeft: 15}}>
                <Text>{this.state.order}</Text>
            </View>

            <Button mode="contained" color="#2ecc71" style={styles.button} onPress={() => this.confirm()}><Icon name="checkcircleo" size={18} color="#FFF"></Icon></Button>

            <Button mode="contained" color="#e67e22" style={styles.button} onPress={() => {this.props.navigation.navigate('pay')}}><Icon name="bells" size={18} color="#FFF"></Icon></Button>

            <Button mode="contained" color="#1abc9c" style={styles.button} onPress={() => {this.props.navigation.navigate('viewBill')}}><IconFA name="file-invoice-dollar" size={18} color="#FFF"></IconFA></Button>

            </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      menu: state.menu,
      categori: state.categori,
      transaction: state.transaction,
      order: state.order
    }
  }
  
  export default connect(mapStateToProps)(listMenu)


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
        width: '100%',
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