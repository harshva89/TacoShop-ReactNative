import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  useColorScheme,
  TouchableOpacity, 
  View,
} from 'react-native';
import Login from './login';


const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};
{/* <Button title="Go to login" onPress={()=>{navigation.navigate("SignInScreen")}}>Go to login</Button> */}
const Logo = ({navigation}) => {
    const { colors } = useTheme();
  return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#ff890a" barStyle="light-content"></StatusBar>
            
                <View style={styles.header}>
                    <Animatable.Text animation="fadeInDownBig">
                    <Text style={styles.title}>Taco-Mania</Text>
                </Animatable.Text>
                </View>
            <Animatable.View animation="fadeInUpBig">
                <View style={[styles.footer, {
                    backgroundColor: colors.background,
                }]}>
                    <Text style={[styles.text, {
                        color: colors.text
                    }]}>We welcome you to taco mania, home of the best tacos.</Text>
                    <Animatable.View animation="bounceIn">
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.button2} onPress={()=>{
                                navigation.navigate('SignInScreen')
                            }}>
                                <Text style={styles.title2}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>
            </Animatable.View>
        </View>
  );
}; 

export default Logo;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ff890a',
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft:20
  },
  footer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#ffffff',
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily: 'sans-serif-medium'
  },
  title2: {
      color: '#ffffff',
      fontSize: 20,
      fontFamily: 'sans-serif-medium'
  },
  text: {
      color: '#009387',
      marginTop:5,
      fontSize: 18,
      fontWeight: 'bold',
      marginRight:60
  },
  button: {
      fontSize: 10,
      marginTop: 200,
      borderRadius: 20
      
  },
  button2: {
      backgroundColor:"#ff890a",
      padding:10,
      width:200,
      borderRadius: 20,
      alignItems: 'center',
      alignSelf:'flex-end'
      
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});