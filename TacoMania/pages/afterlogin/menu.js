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

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExtrasStack = createStackNavigator();

const HomeScreenBasic = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to details" onPress={() => navigation.navigate("Details")}></Button>
    </View>
  )
}

const DetailsScreen = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}

const ExtrasScreen = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Extras Screen</Text>
    </View>
  )
}

const HomeStackScreen = ({navigation}) => {
  return(
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          },

        }}>
        <HomeStack.Screen name="Home" component={HomeScreenBasic} options={{
        
        headerLeft: () => (
            <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <HomeStack.Screen name="Details" component={DetailsScreen}/>
         
      </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({navigation}) => {
  return(
    <DetailsStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></DetailsStack.Screen>
      </DetailsStack.Navigator>
  )
}

const ExtrasStackScreen = ({navigation}) => {
  return(
    <ExtrasStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff890a'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }

        }}>
          
          <ExtrasStack.Screen name="Extras" component={ExtrasScreen} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-right" size={25} backgroundColor="#ff890a" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
          }}></ExtrasStack.Screen>
      </ExtrasStack.Navigator>
  )
}

const mainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFFFF"
      barStyle={{ backgroundColor: '#ff890a' }}

    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Deluxe',
          tabBarIcon: ({ color }) => (
            <Icon name="spoon" color={color} size={26}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Super Deluxe',
          tabBarColor: "#889387",
          tabBarIcon: ({ color }) => (
            <Icon name="rub" color={color} size={26}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Extras"
        component={ExtrasStackScreen}
        options={{
          tabBarLabel: 'Extras',
          tabBarColor: "#889387",
          tabBarIcon: ({ color }) => (
            <Icon name="cc-diners-club" color={color} size={26}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const HomeScreen = ({navigation}) => {
  return(
    mainTabScreen()
  );
}

export default HomeScreen;