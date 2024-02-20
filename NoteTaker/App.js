import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthStackNavigator from './screens/AuthFlow/AuthStackNavigator';
import {auth} from "./firebaseConfig"
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        console.log(user.uid)
      }
      else {
        setSignedIn(false);
      }
    })
  })

  if (!isSignedIn){
    return(
      <NavigationContainer>
        <AuthStackNavigator/>
      </NavigationContainer>
    )
  }

  return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
