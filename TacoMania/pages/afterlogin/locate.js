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


const LocateStack = createStackNavigator();
const LocateScreen1 = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Locate Screen</Text>
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
          
          <LocateStack.Screen name="Details" component={LocateScreen1} options={{
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