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
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';


const AboutStack = createStackNavigator();
const AboutScreen1 = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>About Screen</Text>
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