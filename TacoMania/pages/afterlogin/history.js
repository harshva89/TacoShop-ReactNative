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


const HistoryStack = createStackNavigator();
const HistoryScreen1 = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>History Screen</Text>
    </View>
  )
}


const HistoryStackScreen = ({navigation}) => {
  return(
    <HistoryStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <HistoryStack.Screen name="History" component={HistoryScreen1} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></HistoryStack.Screen>
      </HistoryStack.Navigator>
  )
}


const HistoryScreen = ({navigation}) => {
  return(
    HistoryStackScreen({navigation})
  );
}

export default HistoryScreen;