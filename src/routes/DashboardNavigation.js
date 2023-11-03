import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/dashboard/Dashboard";

const DashboardNav = () => {
  const MyStack = createStackNavigator();
  return (
    <MyStack.Navigator
      initialRouteName="LoginOne"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MyStack.Screen name="Home" component={Dashboard} />
    </MyStack.Navigator>
  );
};

export default DashboardNav;
