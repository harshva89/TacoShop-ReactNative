import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './logo';
import Login from './login';
import SignUpScreen from './signup';

const Stack = createStackNavigator();

const RootStack = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="LogoScreen" component={Logo}/>
        <Stack.Screen name="SignInScreen" component={Login}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
);

export default RootStack;