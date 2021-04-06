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

const HomeScreen = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;