import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import Dashboard from '../screens/dashboard/Dashboard';

const RootNavigation = () => {
  const MyStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <MyStack.Screen name="Login" component={LoginScreen} />
        <MyStack.Screen name="Dashboard" component={Dashboard} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
