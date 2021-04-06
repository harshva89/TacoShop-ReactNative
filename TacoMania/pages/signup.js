import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import { useTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const SignUpScreen = ({navigation}) => {
    
    const { colors } = useTheme();
  const [data, setData] = React.useState({
        email: '',
        password: '',
        confrimPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        secureTextEntryConfirm: true
    })

    const textInputChange = (val) => {
        if(val.length!=0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confrimPassword:val
        })
    }

    const updateSecureText = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateSecureTextConfirm = () => {
        setData({
            ...data,
            secureTextEntryConfirm: !data.secureTextEntryConfirm
        })
    }
  return (
    // <View>
    //       <Text>Login</Text>
    //       <Button title="Go to SignUp" onPress={()=>{navigation.navigate("SignUpScreen")}}></Button>
    //       <Text>go to home</Text>
    //       <Button title="Log in" onPress={()=>{}}></Button>
    //   </View>
      <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content"></StatusBar>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInDownBig">
                    <Text style={styles.text_header}>Register</Text>
                </Animatable.Text>
            </View>
            <Animatable.View animation="fadeInUpBig">
                <View style={[styles.footer, {
                    backgroundColor: colors.background
                }]}>
                    <Text style={[styles.text_footer, {color: colors.text}]}>User name</Text>
                    <View style={styles.action}>
                    <Icon name="user" size={20} color={colors.text}></Icon>
                    <TextInput placeholderTextColor={colors.text} 
                    onChangeText={(val)=>textInputChange(val)}
                    style={[styles.textInput, {color: colors.text}]} placeholder="Username" autoCapitalize="none"></TextInput>
                    {data.check_textInputChange ? 
                    <Animatable.View animation="bounceIn"><Icon name="check" size={20} color={colors.text}></Icon></Animatable.View> : null}
                    
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <Text style={[styles.text_footer, {color: colors.text}]}>Password</Text>
                    <View style={styles.action}>
                    <Icon name="eject" size={20} color={colors.text}></Icon>
                    <TextInput  placeholderTextColor={colors.text} placeholder="Password" onChangeText={(val)=>handlePasswordChange(val)} style={[styles.textInput, {color: colors.text}]} 
                    secureTextEntry={data.secureTextEntry ? true : false} autoCapitalize="none"></TextInput>
                    <TouchableOpacity onPress={updateSecureText}>
                        {data.secureTextEntry ? <Icon name="eye" size={20} color={colors.text}></Icon>  : <Icon name="eye-slash" size={20} color={colors.text}></Icon> }
                        
                    </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <Text style={[styles.text_footer, {color: colors.text}]}> Confirm Password</Text>
                    <View style={styles.action}>
                    <Icon name="eject" size={20} color={colors.text}></Icon>
                    <TextInput placeholder="Password" placeholderTextColor={colors.text} onChangeText={(val)=>handleConfirmPasswordChange(val)} style={[styles.textInput, {color: colors.text}]} 
                    secureTextEntry={data.secureTextEntryConfirm ? true : false} autoCapitalize="none"></TextInput>
                    <TouchableOpacity onPress={updateSecureTextConfirm}>
                        {data.secureTextEntryConfirm ? <Icon name="eye" size={20} color={colors.text}></Icon>  : <Icon name="eye-slash" size={20} color={colors.text}></Icon> }
                        
                    </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <View style={styles.Button}>
                        <TouchableOpacity
                        style={styles.signInButton}
                        onPress={()=>{navigation.navigate("SignUpScreen")}}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Animatable.View>
        </View>
  );
}; 

export default SignUpScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    signInButton:{
        backgroundColor:"#ff890a",
        padding:10,
        margin:8,
        borderBottomColor:"#000",
        borderBottomWidth:2,
        alignItems: 'center',
        borderRadius:10
    },
    registerButton:{
        backgroundColor:"#725362",
        padding:10,
        margin:8,
        borderBottomColor:"#725362",
        borderWidth:4,
        alignItems: 'center',
        borderRadius:10
    },
    buttonText:{
        color:'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    
    container: {
      flex: 1, 
      backgroundColor: '#ff890a'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        backgroundColor: '#fff',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });