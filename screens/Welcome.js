import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Welcome</Text>
      <Button onPress={() => navigation.navigate("SignUp")} title={"Sign Up"} />
      <Button onPress={() => navigation.navigate("SignIn")} title={"Sign In"} />
    </View>
  );
};
