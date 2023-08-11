import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';

const SignInForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = async () => {
      // Create an object with the data to send
      const data = {
        username: username,
        password: password,
      };
      try{
        // Make the POST request
        let response = await fetch('http://26.112.158.194:5000/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(response.ok){
            responseObject = await response.json();
            token = responseObject["auth_token"];
            navigation.navigate({name : "Home", params : {"auth_token": token}, merge : true});
        }else{
            responseObject = await response.json();
            console.log(responseObject["message"]);
        }
      }catch{
        error => {
            // Handle any errors
            console.error(error);
            };
        }
    };
    return (
        <View>
            <TextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    );
  };
  
export default SignInForm;