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

export default class Cricket extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <Image
            style={styles.appLogo}
            source={require('../assets/applogo.png')}></Image>
          <Text style={styles.titletext}>GoSporty</Text>

          <Text style={styles.crickettext}> Cricket </Text>

          <Image
            style={styles.cricketimg}
            source={require('../assets/cricketgif.gif')}
          />

          <TouchableOpacity style={styles.cric}>
            <Text style={styles.crictext}>
              Cricket is a bat-and-ball game played between two teams of eleven
              players on a field at the centre of which is a 22-yard (20-metre)
              pitch with a wicket at each end, each comprising two bails
              balanced on three stumps. The game proceeds when a player on the
              fielding team, called the bowler, "bowls" (propels) the ball from
              one end of the pitch towards the wicket at the other end. The
              batting side's players score runs by striking the bowled ball with
              a bat and running between the wickets, while the bowling side
              tries to prevent this by keeping the ball within the field and
              getting it to either wicket, and dismiss each batter (so they are
              "out").
            </Text>

            <Text style = {styles.crictext}> 
             Means of dismissal include being bowled, when the ball
              hits the stumps and dislodges the bails, and by the fielding side
              either catching a hit ball before it touches the ground, or
              hitting a wicket with the ball before a batter can cross the
              crease line in front of the wicket to complete a run. When ten
              batters have been dismissed, the innings ends and the teams swap
              roles. The game is adjudicated by two umpires, aided by a third
              umpire and match referee in international matches
            </Text>
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
  crickettext: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#7A1712',
  },
  cricketimg: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 100,
    marginTop: 40,
  },
  cric: {
    width: 300,
    backgroundColor: 'lightgreen',
    marginLeft: 30
  }
});
