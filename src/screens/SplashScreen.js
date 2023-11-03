import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { Gif } from "../utilities/Constants";

const SplashScreen = ({ navigation }) => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (showText) {
    navigation.navigate("LoginOne");
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Image source={Gif.Splash} style={{ width: "100%", height: "100%" }} />
    </View>
  );
};

export default SplashScreen;
