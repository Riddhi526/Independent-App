import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.titleBar}>
          <Image
            style={styles.appLogo}
            source={require('../assets/applogo.png')}></Image>
          <Text style={styles.titletext}>GoSporty</Text>
        </View>

        <TouchableOpacity style = {styles.helpButton}>
            <Text style = {styles.helpText}> How to use the app? </Text>
            </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('MainScreen')}>
          <Text style={styles.routeText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  
  routeCard: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'red',
    borderRadius: 40,
    width: 200,
    height: 100,
    margin: 80,
    justifyContent: 'center',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletext: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: -140 
 },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
   height: 300,
   width: 250,
   alignSelf: 'center',
   resizeMode: 'contain',
   marginTop: -20
 },
   helpButton: {
    alignSelf: 'center',
    marginTop: 250,
  },
  helpText: {
  fontSize: 20,
  color: 'red',
  textDecorationLine: 'underline'
  },
 });
