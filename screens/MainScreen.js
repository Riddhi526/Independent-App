import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}  />
        <ScrollView>
        <View style={styles.titleBar}>
          <Image
            style={styles.appLogo}
            source={require('../assets/applogo.png')}></Image>
          <Text style={styles.titletext}>GoSporty</Text>
        </View>
        <View>
          <TouchableOpacity 
          style={styles.sportsbutton}
          onPress={() => this.props.navigation.navigate('Badminton')}>
            <Text style={styles.sportsbuttontext}>Badminton</Text>
            <Image
              source={require('../assets/badmintonlogo.png')}
              style={styles.badimg}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sportsbutton, {marginTop: 40}]}
          onPress={() => this.props.navigation.navigate('Cricket')}>
            <Text style={styles.sportsbuttontext}>Cricket</Text>
            <Image
              source={require('../assets/cricketlogo.png')}
              style={styles.badimg}></Image>
          </TouchableOpacity>

         
        </View>
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
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletext: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: -100,
  },
  appLogo: {
    height: 300,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: -100,
  },
  sportsbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    alignSelf: 'center',
    height: 100,
    width: 300,
    borderColor: 'black',
    borderWidth: 10,
    backgroundColor: '#F9F9F9',
  },
  sportsbuttontext: {
    alignSelf: 'center',
    color: 'balck',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 150,
  },
  badimg: {
    height: 150,
    width: 150,
    top: -80,
    right: -110,
    resizeMode: 'contain',
  },
});
