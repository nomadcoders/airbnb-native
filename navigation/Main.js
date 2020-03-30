import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import Room from "../screens/Main/Room";
import Search from "../screens/Main/Search";
import BackBtn from "../components/Auth/BackBtn";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const TabsNavigator = createBottomTabNavigator();
const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 10
      },
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "600"
      }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? "md-" : "ios-"}`;
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "grey"}
          />
        );
      }
    })}
  >
    <TabsNavigator.Screen name="Explore" component={Explore} />
    <TabsNavigator.Screen name="Saved" component={Saved} />
    <TabsNavigator.Screen name="Map" component={MapScreen} />
    <TabsNavigator.Screen name="Profile" component={Profile} />
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />
    }}
  >
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name="RoomDetail"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            intensity={100}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        )
      }}
    />
    <MainNavigator.Screen
      name="Search"
      options={{ headerShown: false }}
      component={Search}
    />
  </MainNavigator.Navigator>
);
