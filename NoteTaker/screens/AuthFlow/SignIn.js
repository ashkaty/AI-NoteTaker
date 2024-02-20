import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {auth} from '../../firebaseConfig'

const SignInScreen = ({navigation}) => {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = async () => {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <View style={{marginTop:60}}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder = 'Email'
          value = {email}
          onChangeText = {setEmail}
        />
      </View>
      <View style={style.inputContainer}>
        <TextInput 
          placeholder = "Password"
          value = {password}
          onChangeText = {setPassword}
        />
      </View>
      <Button title = "Sign In" onPress={handleSignIn}/>
      <View>
        <TouchableHighlight
          onPress = {() => navigation.navigate("SignUp")}>
            <Text>Create Account</Text>
          </TouchableHighlight>
      </View>
    </View>  
  )
}

const style = StyleSheet.create({
  inputContainer: {
    height: 55,
    backgroundColor: "#fefae5",
    flexDirection: 'row',
    marginHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  }
})
export default SignInScreen