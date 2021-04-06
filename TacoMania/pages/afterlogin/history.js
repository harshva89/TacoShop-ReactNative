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

import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
    heading:{
      paddingTop:10,
      paddingHorizontal:10,
      fontSize:40,
      fontWeight: 'bold',
    },
    info:{
      paddingTop:250,
      color:'#4f4f4f',
      alignSelf:'center',
      paddingHorizontal:20,
      fontSize:20,
      fontWeight: 'bold',
    }
})

const HistoryStack = createStackNavigator();
const HistoryScreen1 = () => {
  
    const { colors } = useTheme();
  return(
    <View >
      <Text style={[styles.heading, {color:colors.text}]}>Order History:</Text>
      <Text style={[styles.info, {color:colors.text}]}>No orders yet!</Text>
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