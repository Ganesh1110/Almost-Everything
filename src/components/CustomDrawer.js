import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Colors, DIM, Images } from "../utilities/Constants";
import { Platform } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.SnakeGreen }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <Image
            source={Images.profileImage}
            style={{
              height: 80,
              width: 80,
              resizeMode: "contain",
              borderRadius: 40,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: Colors.Black,
                fontSize: DIM.deviceFont * 20,
                marginLeft: DIM.deviceWidth * 0.02,
              }}
            >
              Test User
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.Mist, paddingTop: 20 }}>
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
