import React, {useState} from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SignUpForm = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSignUp = async () => {
      const data = {
        username: username,
        password: password,
      };
    
      try {
        let response = await fetch('http://26.112.158.194:5000/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (response.ok) {
          setMessage((message) => message = "Sign up successful");
        } else {
          const responseData = await response.json();
          setMessage((message) => message = responseData.message); // Log the error message
        }
      } catch (error) {
        console.error('Error:', error);
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
            <Text>{message}</Text>
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title = "Sign in" onPress={() => {navigation.navigate("Sign In Page")}}/>
        </View>
    );
  };
  
export default SignUpForm;