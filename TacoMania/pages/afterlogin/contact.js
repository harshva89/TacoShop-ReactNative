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


const ContactStack = createStackNavigator();
const ContactScreen1 = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Contact Screen</Text>
    </View>
  )
}


const ContactStackScreen = ({navigation}) => {
  return(
    <ContactStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <ContactStack.Screen name="Details" component={ContactScreen1} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></ContactStack.Screen>
      </ContactStack.Navigator>
  )
}

const ContactScreen = ({navigation}) => {
  return(
    ContactStackScreen({navigation})
  );
}

export default ContactScreen;