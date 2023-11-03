import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreenTwo from "../screens/login/LoginScreenTwo";
import LoginScreenOne from "../screens/login/LoginScreenOne";
import ForgotPassword from "../screens/forgotPassword/ForgotPassword";
import VerificationCode from "../screens/verificationCode/VerificationCode";
import NewPassword from "../screens/newPassword/NewPassword";
import DrawerNavigation from "./DrawerNavigation";
import GetStarted from "../screens/getStarted/GetStarted";
import SplashScreen from "../screens/SplashScreen";

const RootNavigation = () => {
  const MyStack = createStackNavigator();

  const HappyScenario = () => {
    return (
      <MyStack.Navigator
        initialRouteName="Splash Screen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MyStack.Screen name="Splash Screen" component={SplashScreen} />
        <MyStack.Screen name="Get Started" component={GetStarted} />
        <MyStack.Screen name="LoginOne" component={LoginScreenOne} />
        <MyStack.Screen name="LoginTwo" component={LoginScreenTwo} />
        <MyStack.Screen name="Home" component={DrawerNavigation} />
        <MyStack.Screen name="Forgot Password" component={ForgotPassword} />
        <MyStack.Screen name="Verification Code" component={VerificationCode} />
        <MyStack.Screen name="New Password" component={NewPassword} />
      </MyStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <HappyScenario />
    </NavigationContainer>
  );
};

export default RootNavigation;
