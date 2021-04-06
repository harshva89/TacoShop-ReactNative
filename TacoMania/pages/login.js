import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../context';
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
  Alert,
} from 'react-native';
import Users from './Users';
import { useTheme } from '@react-navigation/native';


const Login = ({navigation}) => {
    const { colors } = useTheme();

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    })

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.length>=4){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            })
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {

        if( val.length >= 7 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }

        
    }

    const handleValidUser = (val) =>{
        // if(val.length>=4){
        //     setData({
        //         ...data,
        //         isValidUser: true
        //     })
        // }
        // else{
        //     setData({
        //         ...data,
        //         isValidUser: false
        //     })
        // }
    }

    const handleValidPassword = (val) =>{
        // if(val.length>=7){
        //     setData({
        //         ...data,
        //         isValidPassword: true
        //     })
        // }
        // else{
        //     setData({
        //         ...data,
        //         isValidPassword: false
        //     })
        // }
    }

    const updateSecureText = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item=>{
            return userName==item.username && password==item.password;
        })

        if ( data.email.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if(foundUser.length==0){
            Alert.alert("Invalid User:", 'Username or password is incorrect.',[
                {text:"Okay"}
            ]);
            return;
        }
        signIn(foundUser);
    }
  return (
    // <View>
    //       <Text>Login</Text>
    //       <Button title="Go to SignUp" onPress={()=>{navigation.navigate("SignUpScreen")}}></Button>
    //       <Text>go to home</Text>
    //       <Button title="Log in" onPress={()=>{}}></Button>
    //   </View>
      <View style={styles.container}>
          <StatusBar backgroundColor="#ff890a" barStyle="light-content"></StatusBar>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInDownBig">
                    <Text style={styles.text_header}>Sign in</Text>
                </Animatable.Text>
            </View>
            <Animatable.View animation="fadeInUpBig">
                <View style={[styles.footer, {
                    backgroundColor: colors.background
                }]}>
                    <Text style={[styles.text_footer, {color: colors.text}]}>User Name:</Text>
                    <View style={styles.action}>
                    <Icon name="user" size={20} color={colors.text}></Icon>
                    <TextInput placeholderTextColor={colors.text} 
                    onEndEditing={(e)=>{handleValidUser(e)}}
                    onChangeText={(val)=>textInputChange(val)}
                    style={[styles.textInput, {color: colors.text}]} placeholder="Username" autoCapitalize="none"></TextInput>
                    {data.check_textInputChange ? 
                    <Animatable.View animation="bounceIn"><Icon name="check" size={20} color={colors.text}></Icon></Animatable.View> : null}
                    
                    </View>
                    {data.isValidUser ? null : <Animatable.View animation="fadeInLeft">
                        <Text style={styles.errorMsg}>Username must be 4 char long</Text>
                    </Animatable.View>}
                    <View style={{marginTop: 20}}></View>
                    <Text style={[styles.text_footer], {color: colors.text}}>Password</Text>
                    <View style={styles.action}>
                    <Icon name="eject" size={20} color={colors.text}></Icon>
                    <TextInput placeholderTextColor={colors.text} 
                    placeholder="Password"
                    onEndEditing={(e)=>handleValidPassword(e)}
                    onChangeText={(val)=>handlePasswordChange(val)} style={[styles.textInput, {color: colors.text}]} 
                    secureTextEntry={data.secureTextEntry ? true : false} autoCapitalize="none"></TextInput>
                    <TouchableOpacity onPress={updateSecureText}>
                        {data.secureTextEntry ? <Icon name="eye" size={20} color={colors.text}></Icon>  : <Icon name="eye-slash" size={20} color={colors.text}></Icon> }
                        
                    </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null : <Animatable.View animation="fadeInLeft">
                        <Text style={styles.errorMsg}>Password must be 7 characters</Text>
                    </Animatable.View>}
                    <View style={styles.Button}>
                        <TouchableOpacity
                        style={styles.signInButton}
                        onPress={()=>{loginHandle(data.email, data.password)}}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.registerButton, {backgroundColor:colors.background}]}
                        onPress={()=>{navigation.navigate("SignUpScreen")}}>
                            <Text style={[styles.buttonText, {color: colors.text}]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
  );
}; 

export default Login;
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
        backgroundColor:"#FFF",
        padding:10,
        margin:8,
        borderColor:"#ff890a",
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
        fontSize: 18,
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