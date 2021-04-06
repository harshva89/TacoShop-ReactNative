import React, { useEffect } from 'react';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './context';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
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
import Logo from './pages/logo';
import Login from './pages/login';
import RootStack from './pages/rootstack';
import { DrawerContent } from './pages/DrawerContent'
import HomeScreen from './pages/afterlogin/menu'
import AboutScreen from './pages/afterlogin/about'
import HistoryScreen from './pages/afterlogin/history'
import ContactScreen from './pages/afterlogin/contact'
import LocateScreen from './pages/afterlogin/locate'

const Stack = createStackNavigator();


const DetailsScreen = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigator}) => {
  return(
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#889387'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
            alignSelf:'center'
          }

        }}>
        <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
         
      </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({navigator}) => {
  return(
    <DetailsStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#889387'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
            alignSelf:'center'
          }

        }}>
          
          <DetailsStack.Screen name="Details" component={DetailsScreen}></DetailsStack.Screen>
      </DetailsStack.Navigator>
  )
}


const App = () => {
const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=>({
    signIn: async(foundUser)=>{
      // setUserToken('fgk');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = (foundUser[0].userName);
        try{
          await AsyncStorage.setItem('userToken', userToken);
        }
        catch(e){

        }
        dispatch({type: 'LOGIN', id:userName,  token:userToken})
      
      
    },
    signOut: async() =>{
      try{
          await AsyncStorage.removeItem('userToken');
        }
        catch(e){

        }
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({type: 'LOGOUT'})
    },
    signUp: ()=>{
      setUserToken('fjk');
      setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }

  }), []);

  useEffect(()=>{
    setTimeout(async()=>{
      let userToken;
      userToken = null;
      try{
        userToken=  await AsyncStorage.getItem('userToken')
      }
      catch(e){

      }
      // setIsLoading(false);
      dispatch({type: 'RETRIEVE_TOKEN', token:userToken})
    }, 1000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color="#000000" size="large"></ActivityIndicator>
      </View>
    )
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
          
          {loginState.userToken != null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="OrderHistory" component={HistoryScreen} />
              <Drawer.Screen name="About" component={AboutScreen} />
              <Drawer.Screen name="Locateus" component={LocateScreen} />
              <Drawer.Screen name="Contactus" component={ContactScreen} />
            </Drawer.Navigator>
          ) : <RootStack></RootStack>}

        
      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}; 

export default App;
