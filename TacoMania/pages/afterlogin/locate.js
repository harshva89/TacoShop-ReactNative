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
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

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
      color:'#FFF',
      paddingLeft: 5,
      fontSize: 20,
      fontWeight: 'bold'
    },
    heading:{
      paddingTop:20,
      paddingHorizontal:20,
      fontSize:40,
      fontWeight: 'bold',
    },
    info:{
      display:'flex',
      flexDirection: 'row',
      color:'#FFFFFF',
      alignSelf:'center',
      paddingHorizontal:20,
      fontSize:20,
      fontWeight: 'bold',
    },
    button:{
      padding:20,
      backgroundColor:'#ff890a',
      margin:20,
      marginHorizontal:50
    }
})

const LocateStack = createStackNavigator();
const LocateScreen1 = () => {
  
    const { colors } = useTheme();
  return(
    <View style={styles.container}>
      <Text style={[styles.heading, {color:colors.text}]}>Locate us:</Text>
      <Animatable.View animation="fadeInDown">
        <View>
          <TouchableOpacity style={styles.button}>
        
        <View style={styles.info}>
          <Icon name="support" color='#FFF' size={25}></Icon>
          <Text style={styles.subText}>Locate</Text>
        </View>
      </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}


const LocateStackScreen = ({navigation}) => {
  return(
    <LocateStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <LocateStack.Screen name="Locate" component={LocateScreen1} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></LocateStack.Screen>
      </LocateStack.Navigator>
  )
}

const LocateScreen = ({navigation}) => {
  return(
    LocateStackScreen({navigation})
  );
}

export default LocateScreen;