import * as React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";
import CustomDrawer from "../components/CustomDrawer";
import Settings from "../screens/settings/Settings";
import Profile from "../screens/profile/Profile";
import { Colors, DIM, Icons } from "../utilities/Constants";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          headerShown: false,
          drawerActiveTintColor: Colors.White,
          drawerActiveBackgroundColor: Colors.CuriousBlue,
          drawerInactiveTintColor: Colors.Black,
          drawerLabelStyle: { marginLeft: -24, fontSize: DIM.deviceFont * 15 },
          drawerIcon: () => {
            return (
              <Image
                source={Icons.home}
                style={{
                  width: 30,
                  height: 25,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerActiveTintColor: Colors.White,
          drawerActiveBackgroundColor: Colors.CuriousBlue,
          drawerInactiveTintColor: Colors.Black,
          drawerLabelStyle: { marginLeft: -24, fontSize: DIM.deviceFont * 15 },
          drawerIcon: () => {
            return (
              <Image
                source={Icons.person}
                style={{
                  width: 30,
                  height: 25,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Settings}
        options={{
          headerShown: false,
          drawerActiveTintColor: Colors.White,
          drawerActiveBackgroundColor: Colors.CuriousBlue,
          drawerInactiveTintColor: Colors.Black,
          drawerLabelStyle: { marginLeft: -24, fontSize: DIM.deviceFont * 15 },
          drawerIcon: () => {
            return (
              <Image
                source={Icons.settings}
                style={{
                  width: 30,
                  height: 25,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
