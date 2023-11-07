import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardNav from "./DashboardNavigation";
import { Image } from "react-native";
import { Colors, Icons } from "../utilities/Constants";
import { GlobalStyles } from "../utilities/GlobalStyles";
import Search from "../screens/search/Search";
import Library from "../screens/libraryList/Library";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            return (
              <Image
                source={Icons.home}
                style={[
                  GlobalStyles.iconSize,
                  { tintColor: focused ? Colors.CuriousBlue : Colors.Silver },
                ]}
              />
            );
          } else if (route.name == "search") {
            return (
              <Image
                source={Icons.search}
                style={[
                  GlobalStyles.iconSize,
                  { tintColor: focused ? Colors.CuriousBlue : Colors.Silver },
                ]}
              />
            );
          } else if (route.name == "Library") {
            return (
              <Image
                source={Icons.library}
                style={[
                  GlobalStyles.iconSize,
                  { tintColor: focused ? Colors.CuriousBlue : Colors.Silver },
                ]}
              />
            );
          }
        },
        tabBarActiveTintColor: Colors.CuriousBlue,
        tabBarInactiveTintColor: Colors.Silver,
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
