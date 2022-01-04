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
  ScrollView,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class Badminton extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F2B8C6' }}>
        <SafeAreaView style={styles.droidSafeArea} forceInset={{ bottom: 'never' }}/>
        <ScrollView>
          <Image
            style={styles.appLogo}
            source={require('../assets/applogo.png')}></Image>
          <Text style={styles.titletext}>GoSporty</Text>

          <Text style={styles.badmintontext}> Badminton </Text>
          <Image
            style={styles.cockimg}
            source={require('../assets/shuttlecockimage.png')}></Image>
          <Image
            style={styles.badimg}
            source={require('../assets/badminton2.png')}></Image>
           <Image 
            style={styles.gifimg}
            source={require('../assets/badmintonimage.gif')}></Image>
          <TouchableOpacity style={styles.badintro}>
            <Text style={styles.textstyle}>
              Badminton is a racquet sport played using racquets to hit a
              shuttlecock across a net. Although it may be played with larger
              teams, the most common forms of the game are "singles" (with one
              player per side) and "doubles" (with two players per side).
              Badminton is often played as a casual outdoor activity in a yard
              or on a beach; formal games are played on a rectangular indoor
              court. Points are scored by striking the shuttlecock with the
              racquet and landing it within the opposing side's half of the
              court.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.alternative}>
          </TouchableOpacity>
         

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  textstyle: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: -5,
    
  },
  badintro: {
    backgroundColor: '#FA86C4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
    height: 400,
    
  },
  appLogo: {
    height: 300,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: -90,
  },
  titletext: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: -140,
  },
  badmintontext: {
    textAlign: 'center',
    fontSize: 40,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#7A1712',
    marginTop: 30,
  },
  cockimg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginLeft: 280,
    marginTop: -50,
  },
  badimg: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginLeft: 25,
    marginTop: -50,
  },
  gifimg: {
    height: 500,
    width: 300,
    resizeMode: 'contain',
    marginLeft: 40,
    marginTop: -180
  },
  alternative: {
    height: 100,
    width: 20
  }
});
