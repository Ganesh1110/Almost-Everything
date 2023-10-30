import { StyleSheet } from "react-native";
import { Colors, DIM, iconHeight, iconWidth } from "./Constants";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  marginView: {
    marginLeft: DIM.deviceWidth * 0.02,
    marginRight: DIM.deviceWidth * 0.02,
  },
  iconSize: {
    width: iconWidth,
    height: iconHeight,
    resizeMode: "contain",
  },
});

export { GlobalStyles };
