import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
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


const Home = ({navigation}) => {
  return (
    <Text>Home</Text>
  );
}; 

export default Home;