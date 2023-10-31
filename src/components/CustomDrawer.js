import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Colors, DIM, Icons, Images } from "../utilities/Constants";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.Iceberg }}
      >
        <ImageBackground
          source={Images.drawerBg}
          style={{
            padding: 20,
          }}
        >
          <Image
            source={Images.drawerBg}
            style={{
              height: 80,
              width: 80,
              resizeMode: "contain",
              borderRadius: 40,
            }}
          />
          <Text style={{ color: Colors.Black, fontSize: DIM.deviceFont * 20 }}>
            Zeus
          </Text>
        </ImageBackground>
        <View
          style={{ flex: 1, backgroundColor: Colors.White, paddingTop: 20 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Test</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
