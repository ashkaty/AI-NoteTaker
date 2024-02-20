import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {createUserWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../../firebaseConfig'
const SignUpScreen = ({}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
                }
    return(
        <View style={{marginTop:60}}>
        <View>
          <TextInput
            placeholder = 'Email'
            value = {email}
            onChangeText = {setEmail}
          />
        </View>
        <View>
          <TextInput 
            placeholder = "Password"
            value = {password}
            onChangeText = {setPassword}
          />
        </View>
        <Button title = "Sign In" onPress={handleSignUp}/>
        <View>
          <TouchableHighlight
            onPress = {() => navigation.navigate("SignUp")}>
              <Text>Create Account</Text>
            </TouchableHighlight>
        </View>
      </View>  
    )
}

export default SignUpScreen