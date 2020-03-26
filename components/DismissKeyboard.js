import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default ({ children }) => {
  const onPress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};
