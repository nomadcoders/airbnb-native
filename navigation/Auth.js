import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerTitleStyle: {
          color: "white"
        }
      }}
    />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);
