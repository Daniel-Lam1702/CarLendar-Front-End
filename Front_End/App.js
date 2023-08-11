import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './src/SignUpForm';
import InitialPage from './src/InitialPage';
import SignInForm from './src/SignInForm';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Initial Page"
          component = {InitialPage}
        />
        <Stack.Screen
          name = "Sign Up Page"
          component={SignUpForm}
        />
        <Stack.Screen
          name = "Sign In Page"
          component={SignInForm}
        />
        <Stack.Screen
          name = "Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

InitialPage.navigationOptions = {
  headerShown: false, // Hide the header title
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;