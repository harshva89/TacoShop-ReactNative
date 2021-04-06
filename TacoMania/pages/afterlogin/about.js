import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'column'
    },
    displayTabs:{
      padding:20,
      margin:5,
      backgroundColor: '#f7f7f7',
      display: 'flex',
      flexDirection: 'row'
    },
    tinyLogo:{
      height: 200,
      width:350,
      margin:20
    },
    logoText:{
      justifyContent:'center',
      paddingTop:20,
      paddingHorizontal:20,
      fontSize:30,
      fontWeight: 'bold',
    },
    subText:{
      justifyContent:'center',
      paddingBottom:20,
      paddingHorizontal:20,
      fontSize:20,
      fontWeight: 'bold',
    },
    heading:{
      paddingTop:10,
      paddingHorizontal:10,
      fontSize:40,
      fontWeight: 'bold',
    },
    info:{
      color:'#4f4f4f',
      paddingHorizontal:20,
      fontSize:20,
      fontWeight: 'bold',
    }
})

const AboutStack = createStackNavigator();
const AboutScreen1 = () => {
  
    const { colors } = useTheme();
  return(
    <View style={styles.container}>
      <Text style={[styles.heading, {color:colors.text}]}>Taco Mania:</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../shop.jpg')}
        />
      <Text style={[styles.info, {color:colors.text}]}>Taco shop info..</Text>
    </View>
  )
}


const AboutStackScreen = ({navigation}) => {
  return(
    <AboutStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <AboutStack.Screen name="About" component={AboutScreen1} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></AboutStack.Screen>
      </AboutStack.Navigator>
  )
}

const AboutScreen = ({navigation}) => {
  return(
    AboutStackScreen({navigation})
  );
}

export default AboutScreen;