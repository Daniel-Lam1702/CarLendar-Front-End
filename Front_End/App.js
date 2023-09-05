import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './src/SignUpForm';
import InitialPage from './src/InitialPage';
import SignInForm from './src/SignInForm';
import MainContainer from './src/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectCar from './src/SelectCar';

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
          name = "Main Screen"
          component={MainContainer}
        />
        <Stack.Screen
          name = "Select Car"
          component={SelectCar}
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