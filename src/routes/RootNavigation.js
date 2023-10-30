import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreenTwo from "../screens/login/LoginScreenTwo";
import LoginScreenOne from "../screens/login/LoginScreenOne";
import Dashboard from "../screens/dashboard/Dashboard";

const RootNavigation = () => {
  const MyStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName="LoginOne"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MyStack.Screen name="LoginOne" component={LoginScreenOne} />
        <MyStack.Screen name="LoginTwo" component={LoginScreenTwo} />
        <MyStack.Screen name="Dashboard" component={Dashboard} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
