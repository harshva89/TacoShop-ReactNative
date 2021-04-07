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
import * as Animatable from 'react-native-animatable';

import { useTheme } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExtrasStack = createStackNavigator();

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'column'
    },
    displayTabs:{
      borderRadius:10,
      padding:20,
      margin:5,
      backgroundColor: '#b8b8b8',
      display: 'flex',
      flexDirection: 'row'
    },
    tinyLogo:{
      height:100,
      width:150,
      borderRadius:7
    },
    logoText:{
      justifyContent:'center',
      paddingTop:15,
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
    }
})

const HomeScreenBasic = ({navigation}) => {
  
    const { colors } = useTheme();
  return(
    <ScrollView>
      <View style={[styles.container, {padding:10}]}>
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Taco A</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Spicy</Text>
        </View>
      </View>
      </Animatable.View>
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg2.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Taco B</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Tangy</Text>
        </View>
      </View>
      </Animatable.View>
      
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg3.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Taco C</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Sweet</Text>
        </View>
      </View>
      </Animatable.View>
      
      
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Taco D</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Sweet</Text>
        </View>
      </View>
      </Animatable.View>
      
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg2.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Taco E</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Spicy</Text>
        </View>
      </View>
      </Animatable.View>
      
    </View>
    </ScrollView>
  )
}

const DetailsScreen = () => {
  
    const { colors } = useTheme();
  return(
    <ScrollView>
      <View style={[styles.container, {padding:10}]}>
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg4.png')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Combo 1</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Taco + Smoothie</Text>
        </View>
      </View>
      </Animatable.View>
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../tacoimg4.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Combo 2</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Taco + Coke</Text>
        </View>
      </View>
      </Animatable.View>
      
      
      
    </View>
    </ScrollView>
  )
}

const ExtrasScreen = () => {
  
    const { colors } = useTheme();
  return(
    <ScrollView>
      <View style={[styles.container, {padding:10}]}>
      <Animatable.View animation="bounceIn">
        <View style={[styles.displayTabs, {backgroundColor:colors.displayTabs}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../pasta.jpg')}
        />
        <View style={styles.container}>
          <Text style={[styles.logoText, {color:colors.text}]}>Pasta</Text>
          <Text style={[styles.subText, {color:colors.text}]}>Italian</Text>
        </View>
      </View>
      </Animatable.View>
      
      
      
    </View>
    </ScrollView>
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
          
          <DetailsStack.Screen name="Super" component={DetailsScreen} options={{
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