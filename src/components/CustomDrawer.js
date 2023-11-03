import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Colors, DIM, Gif, Images } from "../utilities/Constants";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.Iceberg }}
      >
        <View
          // source={Images.drawerBg}
          style={{
            padding: 20,
            backgroundColor: Colors.SnakeGreenOp,
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
              Ganesh
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
